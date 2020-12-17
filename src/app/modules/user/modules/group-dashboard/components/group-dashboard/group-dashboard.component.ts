import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { GraphdataService } from 'src/app/modules/user/services/graphdata.service';
import * as Highcharts from "highcharts";


@Component({
  selector: 'app-group-dashboard',
  templateUrl: './group-dashboard.component.html',
  styleUrls: ['./group-dashboard.component.scss']
})
export class GroupDashboardComponent implements OnInit {
    
    public dateClass;  
    public canvasWidth = 300
    public needleValue = 65
    public centralLabel = ''
    public name = 'Gauge chart'
    public bottomLabel = '65'
    public options = {
        hasNeedle: true,
	needleColor: "black",
	needleStartValue: 54,
	arcColors: ["rgb(255,84,84)","rgb(239,214,19)","rgb(61,204,91)"],
	arcDelimiters: [40,60],
	rangeLabel: ["0","100"]
    }
  icon: boolean = false;
  courses;
  resumeData;
  activeCourseIndex = 0;
  registeredCourseId;
  Highcharts = Highcharts;
  updateFromInput = false;
  updateMcqGroupGraph: Boolean = false;
  chartConstructor = "chart";
  chartCallback;
  courseProgressZpf;
  courseChapters = [];
  updateCourseProgress: Boolean = false;
  updateChartLineDynamic: Boolean = false;
  updateGroupCourseProgress: Boolean = false;
  selectedCourseMCQsl_no;
  selectedGroupCourseMCQsl_no;
  selectedAssignmentsl_no;
  selectedGroupAssignmentsl_no;
  chartoptionsnewdynamic = {
    chart: {
      type: 'bar'
  },
  title: {
      text: 'MCQ Scores',
      align: 'left',
      style: {
        "fontSize": "14px"
      }
  },
  xAxis: {
      categories: ['Introduction to python', 'Functions', 'Numpy', 'Pandas', 'Neutral Networks'],
      title: {
          text: 'Topics'
      }
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Percentage',
          align: 'high'
      },
      plotOptions: {
        bar: {
          stacking: 'percent'
        }
      },
      labels: {
        overflow: 'justify',
        formatter: function() {
           return this.value+"%";
        }
      },
      opposite: true
  },
  tooltip: {
      valueSuffix: ' %'
  },
  plotOptions: {
      bar: {
          dataLabels: {
              enabled: true
          },
                  //   pointWidth: 15,
        //   maxPointWidth: 20,
        //   pointPadding: 0.9,
        borderWidth: 1,
        borderRadius: 10
      },
      series: {
        pointWidth: 15
      }
  },
  legend: {
    enabled: false
  },
  credits: {
      enabled: false
  },
  series: [{
      name: 'Santosh',
      data: [20, 31, 35, 93, 28]
    }]
  };
  chart;
  chartoptionsnewlinedynamic = {
    title: {
      text: 'Assignments'
  },
  chart: {
    type: 'areaspline'
},
  yAxis: {
      min: 0,
      max: 30,
      minRange: 10,
      title: {
        text: null
      }
  },
  xAxis: {
    categories: ['Assignment 1', 'Assignment 2', 'Assignment 3', 'Assignment 4', 'Assignment 5'],
      // accessibility: {
      //     rangeDescription: 'Range: 2010 to 2017'
      // }
  },
  legend: {
    enabled: false
  },
  plotOptions: {
      series: {
          label: {
              connectorAllowed: false
          },
          fillOpacity: 0
          // poinstStart: 2010
      },
      pointInterval: 10
  },
  series: [{
      name: 'Installation',
      data: [20, 10, 30, 10, 20]
   }]
  };
  chartoptionsCourseProgress = {
    chart: {
      type: 'column'
  },
  title: {
      text: ''
  },
  xAxis: {
      categories: [
          'Srikanth',
          'Dev Team',
          'Santosh',
          'Arun',
          'Test App',
          'Elisa',
          'sam',
          'Yormen',
          'Sergy',
          'Ivan',
          'Dev Team1',
          'Jordan'
      ],
      crosshair: true
  },
  yAxis: {
      min: 0
  },
  tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
  },
  legend: {
    enabled: false
  },
  plotOptions: {
      column: {
        pointWidth: 20,
        maxPointWidth: 20,
        //   pointPadding: 0.2,
          borderWidth: 1,
          borderRadius: 10
      },
      
      series: {
        pointWidth:10
      }
  },
  series: [{
      name: 'Tokyo',
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
  }]
  };
  chartoptionsMCQProgress = {
    chart: {
      type: 'bar'
  },
  title: {
      text: 'MCQ Series',
      align: 'left',
      style: {
        "fontSize": "14px"
      }
  },
  xAxis: {
      categories: ['Cloud computing', 'Data Structures', 'Numpy', 'Pandas', 'Functions'],
      title: {
          text: null
      }
  },
  yAxis: {
      min: 0,
      title: {
          text: null
      },
      labels: {
          overflow: 'justify'
      },
      opposite: true
  },
  plotOptions: {
      bar: {
          dataLabels: {
              enabled: true
          },
        //   pointWidth: 15,
        //   maxPointWidth: 20,
        //   pointPadding: 0.9,
            borderWidth: 1,
            borderRadius: 5
      }
  },
  legend: {
      enabled: false
  },
  credits: {
      enabled: false
  },
  series: [{
      name: 'Srikanth',
      data: [107, 31, 635, 203, 2]
  }, {
      name: 'Santosh',
      data: [133, 156, 947, 408, 6]
  }, {
      name: 'Dev Team',
      data: [814, 841, 3714, 727, 31]
  }, {
      name: 'Dev Team',
      data: [1216, 1001, 4436, 738, 40]
  }]
  };
  chartoptionsAssignmentProgress = {
    chart: {
      type: 'column'
    },
    title: {
        text: 'Assignment Series',
        align: 'left',
        style: {
          "fontSize": "14px"
        }
    },
    xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
  yAxis: {
      min: 1,
      max: 5,
      // type: 'categories',
      title: {
          text: 'Assignments'
      },
      // categories: ['Assignment 1', 'Assignment 2', 'Assignment 3', 'Assignment 4', 'Assignment 5'],
      stackLabels: {
          enabled: true,
          style: {
              fontWeight: 'bold',
              color: ( // theme
                  Highcharts.defaultOptions.title.style &&
                  Highcharts.defaultOptions.title.style.color
              ) || 'gray'
          }
      }
  },
  legend: {
      enabled: false
  },
  // tooltip: {
  //     headerFormat: '<b>{point.x}</b><br/>',
  //     pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
  // },
  tooltip: {
    enabled: false
  },
  plotOptions: {
      column: {
          stacking: 'normal',
          // dataLabels: {
          //     enabled: true
          // },
            pointWidth: 15,
            maxPointWidth: 20,
            // pointPadding: 0.9,
          borderWidth: 1,
          borderRadius: 10
      }
  },
  series: [
    {
      name: 'John',
      data: [1] // [5, 3, 4, 1, 2]
  }, {
      name: 'Jane',
      data: [3] // [2, 2, 3, 2, 1]
  }
   ]
  };
  constructor(public auth: AuthService, private graphData: GraphdataService) {
                const self = this;
                this.chartCallback = chart => {
                  self.chart = chart;
                };
  }

  ngOnInit(): void {
    this.auth.subscribedCourses$.subscribe(res => this.courses = res);
    this.getLastActivityofUser();
    this.getFilterData();
  }

  pannelIcon() {
    this.icon = !this.icon;
  }

  getFilterData() {
    this.graphData.getFilterData(this.courses[this.activeCourseIndex].course__id).subscribe(res => {
      if (res && res.registered_course_id) {
        this.courseChapters = res.chapters;
        this.selectedCourseMCQsl_no = this.courseChapters[0].sl_no;
        this.selectedGroupCourseMCQsl_no = this.courseChapters[0].sl_no;
        this.selectedAssignmentsl_no = this.courseChapters[0].sl_no;
        this.selectedGroupAssignmentsl_no = this.courseChapters[0].sl_no;
        this.registeredCourseId = res.registered_course_id;
        this.getMcqScores(res.registered_course_id);
        this.groupMcqScores(res.registered_course_id);
        this.getCourseProgress(res.registered_course_id);
        this.getCourseGroupProgress(res.registered_course_id);
        this.getAssignmentProgress(res.registered_course_id);
        this.getGroupAssigmentProgress(res.registered_course_id);
        this.getZpf(res.registered_course_id);
      }
    });
  }

  getLastActivityofUser() {
    this.graphData.getLastActivityofCourse(this.courses[this.activeCourseIndex].course__id).subscribe(res => {
     this.resumeData = JSON.parse(res.last_url);
    });
  }

  getMcqScores(regCourseId) {
    console.log(this.selectedCourseMCQsl_no)
    this.graphData.getMcqScores(regCourseId, this.selectedCourseMCQsl_no).subscribe(res => {
      console.log(res);
      if (res.MCQ_graph_data && res.MCQ_graph_data.length > 0) {
        let categories = [];
        let data = []
        res.MCQ_graph_data.forEach(element => {
            categories.push(element.test__name);
            data.push(element.quiz_percentile);
        });
        this.chartoptionsnewdynamic.xAxis.categories = categories;
        this.chartoptionsnewdynamic.series = [{
            name: 'sadsa',
            data: data
        }];
        this.chartoptionsnewdynamic.plotOptions.series.pointWidth = 15;
        this.updateFromInput = true;
      }
    });
  }

  groupMcqScores(regCourseId) {
    // console.log(course_slno);
    this.graphData.getGroupMcqScores(regCourseId, this.selectedGroupCourseMCQsl_no).subscribe(res => {
     console.log(res);
      let categories: Set<string> = new Set();
      let series = [];
      if (res.Group_MCQ_graph_data && res.Group_MCQ_graph_data.length > 0) {
        res.Group_MCQ_graph_data.forEach(element => {
            if (element && element.length > 0) {
                let dseries = [];
                element.forEach(sele => {
                    // if (categories.has(sele.test__name)) {
                    //   const cat = [...categories];
                    //   const index = cat.findIndex(x => x === sele.test__name);
                    //   dseries[index] = sele.quiz_percentile;
                    // } else {
                    //     categories.add(sele.test__name);
                    //     dseries.push(sele.quiz_percentile);
                    // }
                    categories.add(sele.test__name);
                    dseries.push(sele.quiz_percentile);
                });
                 series.push({
                      name: element[0].user__username,
                      data: dseries
                 });
            }
        });
        console.log(series);
        let categoriesArray = [...categories];
        this.chartoptionsMCQProgress.xAxis.categories = categoriesArray;
        this.chartoptionsMCQProgress.series = series;
        this.updateMcqGroupGraph = true;
      }
    });
  }

  getCourseProgress(regCourseId) {
      this.graphData.getCourseProgress(regCourseId).subscribe(res => {
        console.log(res);
        this.courseProgressZpf = res.data;
        // this.needleValue = res.data.zpf_value;
        // this.bottomLabel = res.data.zpf_value;
      });
  }

  getCourseGroupProgress(regCourseId) {
      this.graphData.getGroupCourseProgress(regCourseId).subscribe(res => {
       if (res && res.data) {
        let categories = [];
        let seriesData = [];
        Object.keys(res.data).forEach(key => {
           categories.push(key);
           seriesData.push(res.data[key]);
        });
        this.chartoptionsCourseProgress.xAxis.categories = categories;
        this.chartoptionsCourseProgress.series = [{
            name: 'Course Progress',
            data: seriesData
        }];
        this.updateCourseProgress = true;
       }
      });
  }

  getAssignmentProgress(regCourseId) {
    this.graphData.getAssignmentProgress(regCourseId, this.selectedAssignmentsl_no).subscribe(res => {
      console.log(res);
      let data = []
      if (res && res.Assignment_graph_data) {
        res.Assignment_graph_data.forEach(element => {
          data.push(element.score);
        });
        this.chartoptionsnewlinedynamic.series = [{
          name: 'dsfdsf',
          data: data
        }];
        this.updateChartLineDynamic = true;
      }
    });
  }

  getGroupAssigmentProgress(regCourseId) {
    this.graphData.getGroupAssignmentProgress(regCourseId, this.selectedGroupAssignmentsl_no).subscribe(res => {
      console.log(res);
      let categories = [];
      if (res && res.Group_Assignment_graph_data) {
        let series = [];
        res.Group_Assignment_graph_data.forEach(array => categories.push(array[array.length - 1].username));
        res.Group_Assignment_graph_data.forEach(array => {
          let eseries = {
            name: array[array.length - 1].username,
            data: []
          };
          categories.forEach(() => eseries.data.push(0));
          // categories.push(array[array.length - 1].username);
          array.forEach((element, index) => {
            // if (index !== array.length - 1) {
              eseries.data[index] = 1;
            // }
          });
          console.log(series);
          series.push(eseries);
        });
        this.chartoptionsAssignmentProgress.xAxis.categories = categories;
        this.chartoptionsAssignmentProgress.series = series;
        this.updateGroupCourseProgress = true;
      }
    });
  }

  getZpf(regCourseId) {
    this.graphData.getZpf(regCourseId).subscribe(res => {
      console.log(res);
      this.needleValue = res.zpf_value;
      this.bottomLabel = res.zpf_value;
    });
  }

}
