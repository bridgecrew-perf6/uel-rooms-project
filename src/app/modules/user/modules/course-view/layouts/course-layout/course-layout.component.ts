import { Component, OnInit, TemplateRef, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { CourseContentService } from '../../services/course-content.service';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DocService } from 'src/app/modules/user/services/doc.service';
import * as Highcharts from 'highcharts';
import { TalkjsService, User } from 'src/app/services/talkjs.service';
import Talk from 'talkjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { AssignmentComponent } from 'src/app/modules/user/new-modals/new-modals/components/assignment/assignment.component';

@Component({
  selector: 'app-course-layout',
  templateUrl: './course-layout.component.html',
  styleUrls: ['./course-layout.component.scss']
})
export class CourseLayoutComponent implements OnInit, AfterViewInit, OnDestroy {
/*Code Editor Code Start */
editorOptions = {theme: 'vs-dark', language: 'python'};
  // code1: string= 'print "hello world" ';

/*Code Editor Code End */
  coursesIndex = [];
  showCurriculum: Boolean = false;
  totalChaptersData = [];
  chapterName;
  topicName;
  fabCount: Number = 0;
  menuScale;
  rotatePlus;
  courseid;
  regcourseid;
  modalRef: BsModalRef;
  groupDetails;
  groupGraphData;
  problemsolvingGraph: typeof Highcharts = Highcharts;
  problemsolvingGraphOptions: Highcharts.Options;
  quizPerformanceGraph: typeof Highcharts = Highcharts;
  quizPerformanceGraphOptions: Highcharts.Options;
  private chatbox: Talk.Chatbox;
  currentUser: User;
  chats;
  modalOptions = {
    backdrop: true,
    backdropClass: 'customBackdrop',
    size: 'xl'
  };
  public typedone: any;
  respoonsecame: Boolean = false;
  output;
  panelOpenState = false;
  title = 'content-display';
  expandManu : Boolean = false;
  @ViewChild('code')
  public code: any;
  public details: string;
  constructor(private courseDetails: CourseContentService,
              private route: ActivatedRoute,
              private modalService: BsModalService,
              private doc: DocService,
              private talkjsservice: TalkjsService,
              public dialog: MatDialog,
              private modalService1: NgbModal) {
              }

  ngOnInit(): void {
    this.route.params.subscribe(res => {
      if (res['courseid']) {
        this.courseid = res['courseid'];
        this.courseDetails.courseId = res['courseid'];
       }
       if (res['regcourseid']) {
        this.regcourseid = res['regcourseid'];
        this.courseDetails.registeredCourseId = res['regcourseid'];
        this.getCourseContent(res['regcourseid']);
       }
    });
    this.courseDetails.detailsofComponent.subscribe(res => this.details = res);
  }

  ngAfterViewInit(): void {
    this.fetchGroupDetailsForCourse(this.courseid);
    this.getZpfGraph(this.courseid);
    this.courseDetails.triggerCompiler$.subscribe(res => {
      if (res === true) {
        this.openBigModel(this.code);
      }
    })
    // this.scroll("panel-0");
  }

  openModel(data) {
    this.dialog.open(AssignmentComponent, {
      width: '80vw',
      panelClass: 'custom-modalbox',
      data: {...data, regcourseid: this.regcourseid }
    });
  }

  // scroll(id) {
  //   console.log(`scrolling to ${id}`);
  //   let el = document.getElementById(id);
  //   el.scrollIntoView();
  // }

  private async loadChatbox(otherUser: User) {
    console.log('loading chat box');
    this.chatbox = await this.talkjsservice.createChatbox(otherUser);
    console.log(this.chatbox);
    this.chatbox.mount(document.getElementById('talkjs-container'));
  }

  menuExpand() {
    if (this.fabCount == 0) {
      this.menuScale = 'scale(2.1)';
      this.rotatePlus = 'rotate(45deg)';
      this.fabCount = 1;
    } else {
      this.menuScale = 'scale(0)';
      this.rotatePlus = 'rotate(0deg)';
      this.fabCount = 0;
    }
  }

  getCourseContent(regCourseId) {
    this.courseDetails.getCourseInfo(regCourseId).subscribe(res => {
      this.totalChaptersData = res.data || [];
      if (this.route.snapshot.queryParams.chapterslno) {
        const index = this.totalChaptersData.findIndex(x => x.sl_no === +this.route.snapshot.queryParams.chapterslno);
        if (index !== -1) {
          this.totalChaptersData[index].expand = true;
          this.chapterName = this.totalChaptersData[index].Chapter;
          const subtopicIndex = this.totalChaptersData[index].topic.findIndex(x => x.sl_no === +this.route.snapshot.queryParams.topicslno);
          if (subtopicIndex !== -1) {
            this.topicName = this.totalChaptersData[index].topic[subtopicIndex].name;
            setTimeout(() => {
              this.scrollTo(this.route.snapshot.queryParams.topicslno);
            }, 500);
          }
        }
      }
      if (this.route.snapshot.queryParams.assignment) {
        const index = this.totalChaptersData.findIndex(x => x.sl_no === +this.route.snapshot.queryParams.assignment);
        if (index !== -1) {
          this.totalChaptersData[index].expand = true;
          this.openModel(this.totalChaptersData[index]);
        }
      }
    });
  }

  scrollTo(id: string): void {
    const itemToScrollTo = document.getElementById(id);
    if (itemToScrollTo) {
      itemToScrollTo.scrollIntoView(true);
    }
  }

  showModal(template: TemplateRef<any>, type?) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: `${type === 'groupchat' ? '' : 'modal-xl'} modal-dialog-centered`})
    );
  }

  getZpfGraph(courseId) {
    this.doc.getZpfGraph(courseId).subscribe(res => {
      console.log(res);
    });
  }

  fetchGroupDetailsForCourse(courseId) {
    this.doc.fetchGroupDetails(courseId).subscribe(res => {
      this.groupDetails = res;
      this.chats = res.data[0];
      this.talkjsservice.chat_group_id = res.data[0].group_id;
      this.getGroupGraphData(courseId, res.data[0].group_id);
      this.talkjsservice.createCurrentSession();
    });
  }

  getGroupGraphData(courseId, groupId) {
    this.doc.getGroupGraphData(courseId, groupId).subscribe(res => {
      this.groupGraphData = res.final_data_list;
      let series = [];
      this.groupGraphData[0].assignmentdata.forEach(element => {
        series.push({
          type: 'column',
          name: element['name'],
          data: element['assig_solved'],
          pointPadding: 0.3,
          pointPlacement: -0.2
        });
      });
      let series1 = [];
      this.groupGraphData[0].testdata.forEach(element => {
        series1.push({
          type: 'column',
          name: element['name'],
          data: element['test_results']
        });
      });
      this.quizPerformanceGraphOptions = {
        chart: {
          type: 'column',
          scrollablePlotArea: {
            minWidth: 3700,
            scrollPositionX: 1
          },
        },
        exporting: {
          enabled: false
        },
        credits: {
          enabled: false
        },
        title: {
          text: 'Quiz Performance',
          align: 'center'
        },
        subtitle: {
          text: 'Source: aieducator.com'
        },
        xAxis: {
          categories: this.groupGraphData[0].alltests,
          crosshair: false
        },
        yAxis: {
          min: 0,
          title: {
            text: 'performance graph'
          }
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: series1
      };
      this.problemsolvingGraphOptions = {
        chart: {
          type: 'column',
          scrollablePlotArea: {
            minWidth: 3700,
            scrollPositionX: 1,
          }
        },
        exporting: {
          enabled: false
        },
        title: {
          text: 'Problem solving skills vs time'
        },
        xAxis: {
          categories: this.groupGraphData[0].allchapters
        },
        yAxis: [{
          min: 0,
          title: {
            text: 'Problems Solved'
          }
        },
        {
          title: {
            text: 'Time -> no of units * 15mins'
          },
          opposite: true
        }],
        legend: {
          shadow: false
        },
        tooltip: {
          shared: true,
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          column: {
            grouping: true,
            shadow: true,
            borderWidth: 0
          }
        },
        series: series
      };
    });
  }

  showChat(user: any, content: any) {
    if (user == undefined) {
      alert("Mentor is not grouped yet.");
      return;
    }
    this.currentUser = new User("" + user.user_id + this.chats.group_id, user.user_name, user.user_email);
    this.modalService1.open(content, this.modalOptions);
    this.loadChatbox(this.currentUser).then(res => {
      console.log(res);
    });
    console.log('called');
  }

  openBigModel(template: any) {
    this.modalService1.open(template, this.modalOptions);
  }

  runCode(input) {
    this.doc.compileCode(this.typedone, input).subscribe(res => {
       this.output = res.output;
    });
  }

  ngOnDestroy() {
    if (this.chatbox) {
      this.chatbox.destroy();
    }
  }

}
