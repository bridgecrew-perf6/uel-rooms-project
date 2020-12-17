import { Component, OnInit, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { CourseContentService } from '../../../course-view/services/course-content.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as Highcharts from "highcharts";
import HighchartsNetworkgraph from "highcharts/modules/networkgraph";
import HighchartsExporting from "highcharts/modules/exporting";
import * as d3 from 'd3';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { element } from 'protractor';
// declare var d3: any;

HighchartsNetworkgraph(Highcharts);
HighchartsExporting(Highcharts);

@Component({
  selector: 'app-psg-graph',
  templateUrl: './psg-graph.component.html',
  styleUrls: ['./psg-graph.component.scss']
})
export class PSGGraphComponent implements OnInit {

  patterns = [];
  psgaResponse = [];
  ques = [];
  noQuestions: Boolean = false;
  activePattern = 0;
  chart;
  updateFromInput = false;
  Highcharts = Highcharts;
  chartConstructor = "chart";
  chartCallback;
  chartoptionsnewdynamic;
  private data = [
  {"Framework": "Vue", "Stars": "166443", "Released": "2014"},
  {"Framework": "React", "Stars": "150793", "Released": "2013"},
  {"Framework": "Angular", "Stars": "62342", "Released": "2016"},
  {"Framework": "Backbone", "Stars": "27647", "Released": "2010"},
  {"Framework": "Ember", "Stars": "21471", "Released": "2011"},
 ];
private svg;
private margin = 50;
private width = 750 - (this.margin * 2);
private height = 400 - (this.margin * 2);
private treesvg;
private treeLayout;
private treeData: any[] = [ {
  "name": "Top Level",
  "children": [
    {
      "name": "Level 2: A",
      "children": [
        {
          "name": "Son of A",
        },
        {
          "name": "Daughter of A",
        }
      ]
    },
    {
      "name": "Level 2: B",
    }
  ]
}];
treeDataNew =
        {
            "name": "BU Head",
            "children": [
              {
                  "name": "Manager",
                  "children": [
                    {
                        "name": "Team Lead",
                         "children": []
                    },
                    {
                        "name": "Team Lead",
                        "children": []
                    },
                    {
                        "name": "Team Lead 1",
                        "children": []
                    }
                  ]
              },
              {
                  "name": "Manager",
                  "children": []
              },
              {
                  "name": "Manager",
                  "children": []
              }
            ]
        };
  orgData = [];
  nodeProgress: Boolean = true;
  modalRef: BsModalRef;
  video: any;
  constructor(private courseContent: CourseContentService,
              private route: ActivatedRoute,
              private router: Router,
              private modalService: BsModalService) {
                const self = this;
                this.chartCallback = chart => {
                  self.chart = chart;
                };
              }

  ngOnInit(): void {
    this.route.queryParams.subscribe(res => {
      if (res.tag) {
        this.getPsga();
      }
    });
    // this.createSvg();
    // this.drawBars(this.data);
    this.treemap();
    this.createChartNode();
    this.drawNodes();
  }

  navigateToPreviousTab() {
    this.router.navigateByUrl(this.route.snapshot.queryParams.prevUrl);
  }

  getPsga() {
    this.courseContent.psda(this.route.snapshot.queryParams.tag, this.route.snapshot.queryParams.regcourseid).subscribe(res => {
      this.psgaResponse = res.data;
      let nodes = [];
      let links = [];
      let new_nodes = [];
      res.graph_data.links.forEach(link => {
        link.color = '#2E95D8';
      });
      this.orgData = res.graph_data.links;
    //   this.orgData = [
    //       { 'id': 'parent', 'role': 'Board', 'color': '#71AF17' },
    // { 'id': '1', 'role': 'General Manager', 'manager': 'parent', 'color': '#71AF17' },
    // { 'id': '2', 'role': 'Human Resource Manager', 'manager': '1', 'color': '#1859B7' },
    // { 'id': '3', 'role': 'Trainers', 'manager': '2', 'color': '#2E95D8' },
    // { 'id': '4', 'role': 'Recruiting Team', 'manager': '2', 'color': '#2E95D8' }, 
    // { 'id': '6', 'role': 'Design Manager', 'manager': '1', 'color': '#1859B7' },
    // { 'id': '7', 'role': 'Design Supervisor', 'manager': '6', 'color': '#2E95D8' },
    // { 'id': '8', 'role': 'Development Supervisor', 'manager': '6', 'color': '#2E95D8' },
    // { 'id': '10', 'role': 'Operations Manager', 'manager': '1', 'color': '#1859B7' },
    // { 'id': '11', 'role': 'Statistics Department', 'manager': '10', 'color': '#2E95D8' },
    // { 'id': '12', 'role': 'Logistics Department', 'manager': '10', 'color': '#2E95D8' },
    // { 'id': '16', 'role': 'Marketing Manager', 'manager': '1', 'color': '#1859B7' },
    // { 'id': '17', 'role': 'Overseas Sales Manager', 'manager': '16', 'color': '#2E95D8' }, 
    // { 'id': '20', 'role': 'Service Department Manager', 'manager': '16', 'color': '#2E95D8' }
    //   ];
      // console.log(res.graph_data);
      // let graph_data = res.graph_data;
      // let graph_data1 = res.graph_data;
      // graph_data1.nodes.forEach(node => {
      //   node.label = node.id;
      //   node.color = '#9467bd';
      // });
      // console.log(graph_data1);
      // this.networkData = graph_data1;
      let graph_data = {
        nodes: [],
        links: []
      };
       Object.keys(this.psgaResponse[1]).forEach(element => {
         console.log(res.data[1][element]);
         if (res.data[1][element].question && res.data[1][element].question.length > 0) {
          res.data[1][element] = this.detectColorCode(res.data[1][element]);
          this.patterns.push(res.data[1][element]);
         }
        //  console.log(res.data[1][element].json_format.nodes);
        if (element !== 'node_diagram') {
        //   res.data[1][element].json_format.nodes.forEach(node => {
        //     node.label = node.id;
        //     node.color = '#9467bd';
        //     graph_data.nodes.push(node);
        //  });
        //  res.data[1][element].json_format.links.forEach(link => {
        //   graph_data.links.push(link);
        //  });
        }
         console.log(graph_data);
        //  const graphJson = JSON.parse(res.data[1][element].json_format);
        //  new_nodes.push(graphJson.nodes);
        //  links.push(graphJson.links);
        //  res.data[1][element].pattern.forEach(ele => {
        //   nodes.push({
        //     from: ele[0],
        //     to: ele[1]
        //   });
        //  });
       });
       console.log(this.patterns);
      //  this.networkData = graph_data;
       this.networkData = res.graph_data;
      //  let nodes_patterns = [{
      //   id: 'This Question',
      //   label: 'This Question',
      //   color:'#9467bd'
      //  }];
      //  let links_patterns = [];
      //  this.patterns.forEach((pat, index) => {
      //   nodes_patterns.push({
      //     id: 'Pattern ' + (index + 1),
      //     label: 'Pattern ' + (index + 1),
      //     color:'#9467bd'
      //    });
      //   links_patterns.push({
      //     source: 'This Question',
      //     target: 'Pattern ' + (index + 1)
      //    });
      //  });
      //  console.log(nodes_patterns);
      //  console.log(links_patterns);
      //  this.networkData = {
      //   nodes: nodes_patterns,
      //   links: links_patterns
      //  };
       console.log(this.networkData);
      //  console.log(new_nodes);
       console.log(links);
       res.data[1].node_diagram.forEach(element =>{
        nodes.push({
              from: element[0],
              to: element[1]
         });
       });
       this.chartoptionsnewdynamic = {
        chart: {
          type: 'networkgraph'
        },
        title: {
          text: 'Network Graph'
        },
        plotOptions: {
          networkgraph: {
            layoutAlgorithm: {
              enableSimulation: false
            }
          }
        }
      };
      this.updateGraph(nodes);
       this.getQuestionsForInitialButton(this.psgaResponse[0]);
    });
  }

  detectColorCode(res) {
    console.log('came to color code');
    console.log(res.node_ks);
    const values: number [] = Object.values(res.node_ks);
    const minValue = Math.min(...values);
    console.log(minValue);
    if (minValue <= 0) {
      res.colorCode = 'btn-dark';
    } else if (minValue < 3) {
      res.colorCode = 'btn-danger'; // red
    } else if (minValue >= 3 || minValue <= 5) {
      res.colorCode = 'btn-warning'; // orange
    } else {
      res.colorCode = 'btn-success'; //red
    }
    return res;
  }

  getQuestionsForInitialButton(array, pattern?, all?) {
    // if (pattern) {
    //   let nodes = [];
    //   pattern.pattern.forEach(ele => {
    //     nodes.push({
    //       from: ele[0],
    //       to: ele[1]
    //     });
    //   });
    //   this.updateGraph(nodes);
    // }
    // if (all) {
    //   let nodes = [];
    //   Object.keys(this.psgaResponse[1]).forEach(element => {
    //     this.psgaResponse[1][element].pattern.forEach(ele => {
    //      nodes.push({
    //        from: ele[0],
    //        to: ele[1]
    //      });
    //     });
    //   });
    //  this.updateGraph(nodes);
    // }
    if (array.length > 0) {
      this.nodeProgress = false;
      this.courseContent.psdaInitial(array, pattern && pattern.node_ks ? pattern.node_ks : '', this.networkData.nodes, this.route.snapshot.queryParams.regcourseid).subscribe(res => {
        this.ques = res.ques;
        res.ques.length === 0 ? this.noQuestions = true : this.noQuestions = false;
        if (pattern && pattern.node_ks) {
          this.networkData.nodes = res.nodes;
          this.nodeProgress = true;
        } else {
          // this.nodeProgress = false;
          this.networkData.nodes.forEach(node => {
            node.color = '#2E95D8';
          });
          this.nodeProgress = true;
        }
      });
    } else {
      this.noQuestions = true;
      this.ques = [];
    }
  }

  navigateTojupyterIframe(ques) {
    this.router.navigate(['/user/assignment'], {
     queryParams: {
       tag: ques.tag,
      //  chapter_slno: this.route.snapshot.queryParams.chapter_slno,
      chapter_slno: ques.chapter_slno.toString().substr(0, 1),
      regcourseid: this.route.snapshot.queryParams.regcourseid,
       hidePsga: 'hide',
       prevUrl: this.router.url
     }
    });
  }

  playVideo(template: TemplateRef<any>, video) {
    this.modalRef = this.modalService.show(template);
    this.video = video;
  }

  updateGraph(nodes) {
    this.chartoptionsnewdynamic.series = [{
      dataLabels: {
        enabled: true,
        linkTextPath: {
          attributes: {
            // dy: 12
          }
        },
        linkFormat: '{point.fromNode.name} \u2192 {point.toNode.name}',
        textPath: {
          enabled: true,
          attributes: {
            // dy: 14,
            // startOffset: '45%',
            // textLength: 80
          }
        },
        format: '{point.name}'
      },
      marker: {
        radius: 25
      },
      data: nodes
    }];
    this.updateFromInput = true;
  }

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
    .range([0, this.width])
    .domain(data.map(d => d.Framework))
    .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg.append("g")
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
    .domain([0, 200000])
    .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
    .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll("bars")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", d => x(d.Framework))
    .attr("y", d => y(d.Stars))
    .attr("width", x.bandwidth())
    .attr("height", (d) => this.height - y(d.Stars))
    .attr("fill", "#d04a35");
}

treemap() {
  this.treesvg = d3.select("figure#tree")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
}

drawNodes() {
  // let treeData =
  // {
  //   "name": "Top Level",
  //   "children": [
  //     { 
  //       "name": "Level 2: A",
  //       "children": [
  //         { "name": "Son of A" },
  //         { "name": "Daughter of A" }
  //       ]
  //     },
  //     { "name": "Level 2: B" }
  //   ]
  // };
  // this.treesvg = d3.select("figure#tree")
  // .append("svg")
  // .attr("width", this.width + (this.margin * 2))
  // .attr("height", this.height + (this.margin * 2))
  // .append("g")
  // .attr("transform", "translate(" + 50 + "," + 50 + ")");
  //   let tree = d3.tree().size([400, 400]);
  //   let hirarchy = d3.hierarchy(treeData);
  //   let nodes = tree(hirarchy).descendants();
  //   console.log(nodes);
  //   let links = tree(hirarchy).links();
  //   console.log(links);
  //   let node = this.treesvg.selectAll(".node").data(nodes).enter()
  //             .append("g").attr("class", "node").attr("transform", function (d: any) {
  //               return 'translate(' + d.x + ',' + d.y + ')';
  //             });
  //     node.append("circle").attr("radius", 5).attr("fill", "steelblue");
    // let diagonal = d3.linkHorizontal();
    // canvas.append("path").attr("fill", "node").attr("stroke", "black").attr("d", diagonal)
}

createChartNode() {
  this.treeLayout = d3.tree().size([200, 200]).nodeSize([45, 65])
  .separation((a,b)=>{return a.parent == b.parent ? 10 : 20});
    // let tree = d3.tree().size([400, 400]);
    let hirarchy = d3.hierarchy(this.treeData);
    let nodes = this.treeLayout(hirarchy).descendants();
    console.log(nodes);
    let links = this.treeLayout(hirarchy).links();
    console.log(links);
    this.treesvg.selectAll(".node").data(nodes).enter().append("g").attr("class", "node").attr("transform", function (d: any) {
                    return 'translate(' + d.x + ',' + d.y + ')';
                  }).append("circle").attr("radius", 5).attr("fill", "steelblue")
}

// networkData = {"nodes":[{"id":"1","label":"JVP","serialNumber":"111","type":"access-point","iconPath":"./assets/icon-images/access-point.png","color":"#5cb85c"},{"id":"2","label":"Lab2.0","serialNumber":"222","type":"access-point","iconPath":"./assets/icon-images/access-point.png","color":"#5cb85c"},{"id":"3","label":"Bezeq","serialNumber":"333","type":"access-point","iconPath":"./assets/icon-images/access-point.png","color":"#5cb85c"},{"id":"4","label":"Tsion Amir","serialNumber":"444","type":"access-point","iconPath":"./assets/icon-images/access-point.png","color":"#5cb85c"},{"id":"5","label":"Oslo","serialNumber":"555","type":"switch","iconPath":"./assets/icon-images/switch.png","color":"#f0ad4e"},{"id":"6","label":"London","serialNumber":"666","type":"switch","iconPath":"./assets/icon-images/switch.png","color":"#f0ad4e"},{"id":"7","label":"Palo Alto","serialNumber":"777","type":"switch","iconPath":"./assets/icon-images/switch.png","color":"#f0ad4e"},{"id":"8","label":"Beer Sheva","serialNumber":"888","type":"switch","iconPath":"./assets/icon-images/switch.png","color":"#f0ad4e"},{"id":"9","label":"Hulon","serialNumber":"999","type":"switch","iconPath":"./assets/icon-images/switch.png","color":"#f0ad4e"},{"id":"10","label":"Pinka","serialNumber":"1000","type":"switch","iconPath":"./assets/icon-images/switch.png","color":"#f0ad4e"},{"id":"11","label":"Jerusalem","serialNumber":"1100","type":"switch","iconPath":"./assets/icon-images/switch.png","color":"#f0ad4e"},{"id":"12","label":"Har Hotvim","serialNumber":"1200","type":"router","iconPath":"./assets/icon-images/router.png","color":"#337ab7"},{"id":"13","label":"Tel Aviv","serialNumber":"1300","type":"router","iconPath":"./assets/icon-images/router.png","color":"#337ab7"}],"links":[{"source":"1","target":"5","status":"Working"},{"source":"2","target":"6","status":"Does not work"},{"source":"3","target":"7","status":"Working"},{"source":"4","target":"8","status":"Working"},{"source":"5","target":"9","status":"Does not work"},{"source":"6","target":"9","status":"Does not work"},{"source":"7","target":"10","status":"Does not work"},{"source":"8","target":"10","status":"Working"},{"source":"10","target":"11","status":"Working"},{"source":"9","target":"12","status":"Working"},{"source":"11","target":"12","status":"Working"},{"source":"12","target":"13","status":"Does not work"}]};
networkData;
}
