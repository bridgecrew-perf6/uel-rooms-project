import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseRecommendationsService } from 'src/app/services/course-recommendations.service';
import { AuthService } from 'src/app/services/auth.service';
import * as Highcharts from 'highcharts';
import { GraphdataService } from '../../services/graphdata.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  activeCourseIndex = 0;
  group_mcq_tests: Array<string> = [];
  assignment: typeof Highcharts = Highcharts;
  assignmentOptionsnew: Highcharts.Options;
  mcq: typeof Highcharts = Highcharts;
  mcqOptionsNew: Highcharts.Options;
  courses;
  groupMembers = [];
  coursesInfo = [];
  group_assignment_data = [];
  group_mcq_data = [];
  dataCame: Boolean = false;
  selectedCourseId = 'all';
  selectedUserId = 'all';
  updateFlag = false;
  registeredCourseId;
  resumeData;
  constructor(public auth: AuthService, private graphData: GraphdataService) { }

  ngOnInit(): void {
    this.auth.subscribedCourses$.subscribe(res => this.courses = res);
    this.getFilterData();
    this.getLastActivityofUser();
    // this.getGraphData();
  }

  getFilterData() {
    this.dataCame = false;
    this.graphData.getFilterData(this.courses[this.activeCourseIndex].course__id).subscribe(res =>{
     console.log(res);
     if (res) {
      if (res.group_members) {
        this.groupMembers = res.group_members;
      }
      if (res.chapters) {
        this.coursesInfo = res.chapters;
      }
      if (res.registered_course_id) {
        this.registeredCourseId = res.registered_course_id;
      }
      if (res.group_assignment_data) {
        this.group_assignment_data = res.group_assignment_data;
        let seriesData1 = [];
        Object.keys(this.group_assignment_data).forEach(res => {
            if (res !== 'chapters') {
                  seriesData1.push({
                    type: 'column',
                    name: this.group_assignment_data[res].name,
                    data: this.group_assignment_data[res].data,
                    pointPadding: 0.3,
                    pointPlacement: -0.2
                  });
            }
        });
        this.assignmentOptionsnew = {
          series: seriesData1,
          chart: {
            type: 'column',
            scrollablePlotArea: {
              minWidth: 3700,
              scrollPositionX: 1,
            },
            backgroundColor: 'black'
          },
          title: {
            text: "Assignment Details",
            align: "left",
            margin: 0,
            x: 30
          },
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
        };
      }
      if (res.group_test_data) {
        this.group_mcq_data = res.group_test_data;
        let seriesData2 = [];
        Object.keys(this.group_mcq_data).forEach(res => {
          if (res === 'tests') {
            this.group_mcq_tests = this.group_mcq_data[res];
          } else {
            seriesData2.push({
              type: 'column',
              name: this.group_mcq_data[res].name,
              data: this.group_mcq_data[res].data
            });
          }
        });
        this.mcqOptionsNew = {
          series: seriesData2,
          chart: {
            type: 'column',
            scrollablePlotArea: {
              minWidth: 3700,
              scrollPositionX: 1
            },
            backgroundColor: 'black'
          },
          title: {
            text: "MCQ Details",
            align: "left",
            margin: 0,
            x: 30
          },
          subtitle: {
            text: 'Source: aieducator.com'
          },
          exporting: {
            enabled: false
          },
          credits: {
            enabled: false
          },
          plotOptions: {
            column: {
              pointPadding: 0.2,
              borderWidth: 0
            },
            series: {
              allowPointSelect: true,
              marker: {
                enabled: false,
                states: {
                  hover: {
                    enabled: true
                  }
                }
              }
            }
          },
          yAxis: {
            min: 0,
            title: {
              text: 'performance graph'
            }
          },
          xAxis: {
            type: "category",
            categories: this.group_mcq_tests,
          },
        };
      }
     }
     this.dataCame = true;
    });
  }

  getGraphData() {
    this.graphData.getGraphData(this.courses[this.activeCourseIndex].course__id, this.selectedCourseId === 'all' ? undefined : this.selectedCourseId, this.selectedUserId === 'all' ? undefined : this.selectedUserId).subscribe(res =>{
      console.log(res);
      if (res) {
        if (res.group_assignment_data) {
          this.group_assignment_data = res.group_assignment_data;
          let seriesData1 = [];
          Object.keys(this.group_assignment_data).forEach(res => {
              if (res !== 'chapters') {
                    seriesData1.push({
                      type: 'column',
                      name: this.group_assignment_data[res].name,
                      data: this.group_assignment_data[res].data,
                      pointPadding: 0.3,
                      pointPlacement: -0.2
                    });
              }
          });
          this.assignmentOptionsnew.series = seriesData1;
        }
        if (res.group_test_data) {
          this.group_mcq_data = res.group_test_data;
          let seriesData2 = [];
          Object.keys(this.group_mcq_data).forEach(res => {
            if (res === 'tests') {
              this.group_mcq_tests = this.group_mcq_data[res];
            } else {
              seriesData2.push({
                type: 'column',
                name: this.group_mcq_data[res].name,
                data: this.group_mcq_data[res].data
              });
            }
          });
          this.mcqOptionsNew.series = seriesData2;
        }
      }
      this.updateFlag = true;
     });
  }

  highletgrpah() {
    // let a: any = this.assignmentOptions.series[0];
    // a.data[0].select(true, true);
    // .data[2].select(true,false);
  }

  getLastActivityofUser() {
    this.graphData.getLastActivityofCourse(this.courses[this.activeCourseIndex].course__id).subscribe(res => {
     console.log(res);
     this.resumeData = JSON.parse(res.last_url);
    });
  }

}
