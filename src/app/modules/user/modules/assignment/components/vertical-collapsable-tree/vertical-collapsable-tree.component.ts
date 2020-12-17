import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';
import { DataloaderService } from '../../services/dataloader.service';

@Component({
  selector: 'app-vertical-collapsable-tree',
  templateUrl: './vertical-collapsable-tree.component.html',
  styleUrls: ['./vertical-collapsable-tree.component.scss']
})
export class VerticalCollapsableTreeComponent implements OnInit {
  @Input('data') data;
  d3: d3.TreeLayout<any>;
  duration:number = 750;
  i: number = 0;
  public click = (d) => {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
    return d;
  }

  public mouseover = (d) => {
    var div = d3.select("#container").append("div")
        .attr("class", "tooltip")
        .style("opacity", 1)
        .style("left", (d3.event.pageX) + "px")
        .style("top", (d3.event.pageY - 220) + "px")
        .html("<p class=\"text-danger\">name will display here</p>");
      return d;
    // if (d.parent) this.mouseover(d.parent);
  }
  public mousemove = (d) => {
      d3.select("#container").selectAll('div.tooltip').style("opacity", 1);
      return d;
  }
  public mouseout = (d) => {
      d3.select("#container").selectAll('div.tooltip').remove();
      return d;
  }


  constructor(public dataLoaderService: DataloaderService) { }

  ngOnInit(): void {
    let draw = (source) => {
      let margin = {top: 20, right: 20, bottom: 30, left: 20};
      let width = 360 - margin.left - margin.right + 400;
      let height = 300 - margin.top - margin.bottom;
      // console.log(width);
      // console.log(height);
      let treemap = d3.tree().size([width, height]);
      let treeData = treemap(root);
      let nodes = treeData.descendants();
      let links = treeData.descendants().slice(1);
  
      nodes.forEach(d => d.y = d.depth * 100);
      
      let node = g.selectAll('g.node')
      .data(nodes, d => d['id'] || (d['id'] = ++this.i));
  
      let nodeEnter = node
      .enter()
    .append('g')
    .attr('class', 'node')
    .attr("style", "cursor: pointer")
    .attr("transform", d=> "translate(" + source.x0 + "," + source.y0 + ")")
    .on('click',d=> draw(this.click(d)));
    // .on("mouseover", d=> this.mouseover(d))
    // .on("mousemove", d => this.mousemove(d))
    // .on("mouseout", d => this.mouseout(d));
    // .on("mouseover", d=> draw(this.mouseover(d)));
    // .on("mousemove", (d) => draw(this.mousemove(d)))
    // .on("mouseout", d => draw(this.mouseout(d)));;
  
  
    nodeEnter.append('circle')
    .attr('class', 'node')
    .attr("stroke", "steelblue")
    .attr("stroke-width", "3.5px")
    .attr("fill", d =>  d['_children'] ? "bluelightsteelblue" : "#fff")
    .attr('r', 1e-6)
  
    nodeEnter.append('text')
    .attr("dy", ".35em")
    .attr("style", "font: 10px sans-serif")
    .attr("x", "13")
    // .attr("x", d => d.children || d['_children']? -13 : 13)
    .attr("text-anchor", "start")
    // .attr("text-anchor", d => d.children || d['_children']? "end" : "start")
    .text(d =>  d.data['name']);
      
  
    let nodeUpdate = nodeEnter.merge(<any>node);
    
    nodeUpdate.transition()
    .duration(this.duration)
    .attr("transform", d => "translate(" + d.x + "," + d.y + ")");
  
    nodeUpdate.select('circle')
    .attr('r', 10)
    .attr("fill", d =>  d['_children'] ? "lightsteelblue" : d['data']['color'])
    .attr('cursor', 'pointer');
  
    let nodeExit = node.exit().transition()
    .duration(this.duration)
    .attr("transform",d => "translate(" + source.x + "," + source.y + ")")
    .remove();
  
  // On exit reduce the node circles size to 0
  nodeExit.select('circle')
  .attr('r', 1e-6)
  
  // On exit reduce the opacity of text labels
  nodeExit.select('text')
  .style('fill-opacity', 2e-6);
  
  // Let's draw links
  let link = g.selectAll('path.link')
  .data(links, d=> d['id']);
  
  // Work on enter links, draw straight lines
  
  let linkEnter = link.enter().insert('path', "g")
    .attr("class", "link")
    .attr("fill", "none")
    .attr("stroke", "#ccc")
    .attr("stroke-width", "1.5px")
  .attr('d', () =>{
    let o = {x: source.x0, y: source.y0};
    return diagonal(o, o)
  });
  
  // UPDATE
  let linkUpdate = linkEnter.merge(<any>link);
  
  
    // Transition back to the parent element position, now draw a link from node to it's parent
    linkUpdate.transition()
        .duration(this.duration)
        .attr('d', d =>diagonal(d, d.parent));
  
    // Remove any exiting links
    let linkExit = link.exit().transition()
        .duration(this.duration)
        .attr('d', d => {
          let o = {x: source.x, y: source.y}
          return diagonal(o, o)
        })
        .remove();
  
          // Store the old positions for transition.
    nodes.forEach(function(d){
      d['x0'] = d.x;
      d['y0'] = d.y;
    });
  
    }   
  
      let diagonal = (s, d) => {
    
       let path = `M ${s.x} ${s.y}
               L ${d.x} ${d.y}`;     
     return path
       }
  
  let margin = {top: 20, right: 20, bottom: 30, left: 20};
  let width = 400 - margin.left - margin.right + 400;
  let height = 1500 - margin.top - margin.bottom;


  let svg = d3.select("#container")
        .append("svg")
        .attr("width", width + margin.right + margin.left)
        .attr("height", height + margin.top + margin.bottom)
  // console.log(width + margin.right + margin.left);
  // console.log(height + margin.top + margin.bottom);
let g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let root;
    root = this.dataLoaderService.findRoot(this.data.nodes, this.data.links);
    // console.log(root);
    root = d3.hierarchy(root);
    root.x0 = 0;
    root.y0 = width / 3;
    
   draw(root);
  }

}
