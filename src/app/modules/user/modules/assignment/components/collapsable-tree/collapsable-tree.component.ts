import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-collapsable-tree',
  templateUrl: './collapsable-tree.component.html',
  styleUrls: ['./collapsable-tree.component.scss']
})
export class CollapsableTreeComponent implements OnInit {
  @Input('data') data;
  d3: d3.TreeLayout<any>;
  duration:number = 750;
  i: number = 0;
  constructor() { }

  ngOnInit(): void {
    let margin = {top: 20, right: 20, bottom: 30, left: 20};
    let width = 400 - margin.left - margin.right + 400;
    let height = 700 - margin.top - margin.bottom;
  
    var svg = d3.select('#container').append("svg")
                    .attr("width", width + margin.right + margin.left)
                    .attr("height", height + margin.top + margin.bottom);
    console.log(height + margin.top + margin.bottom);
    console.log(width + margin.right + margin.left);
    let g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
    console.log(this.data);
    let root;
    let tree = d3.tree().size([height, width]);
    root = this.data;
    root.x0 = height / 2;
    root.y0 = 0;
    // update(root);

    let nodeclick = (d) => {
      if (d.children) {
          d._children = d.children;
          d.children = null;
      } else {
          d.children = d._children;
          d._children = null;
      }
      update(d);
    };

    // diagonal
    let diagonal = function link(d) {
      return "M" + d.source.y + "," + d.source.x
          + "C" + (d.source.y + d.target.y) / 2 + "," + d.source.x
          + " " + (d.source.y + d.target.y) / 2 + "," + d.target.x
          + " " + d.target.y + "," + d.target.x;
    };

    let update = (source) => {
      // create a hierarchy from the root
      let treeRoot = d3.hierarchy(root);
      tree(treeRoot);
      // nodes
      let nodes = treeRoot.descendants();
      // links
      let links = treeRoot.links();
      console.log(nodes);
      console.log(links);
      // Normalize for fixed-depth.
      nodes.forEach(d => d['y'] = d.depth * 100);

      // Declare the nodes…
      let node = g.selectAll('g.node')
      .data(nodes, d => d['id'] || (d['id'] = ++this.i));

      let nodeEnter = node.enter().append("g")
      .attr("class", "node")
      .attr("transform", function (d) {
          return "translate(" + source.x0 + "," + source.y0 + ")";
      }).on("click", nodeclick);

      nodeEnter.append("circle")
         .attr("r", 10)
         .attr("stroke", (d) => { return d.children || d['_children'] ? "steelblue" : "#00c13f"; })
         .style("fill", function (d) { return d.children || d['_children'] ? "lightsteelblue" : "#fff"; });

       //.attr("r", 10)
       //.style("fill", "#fff");
      nodeEnter.append("text")
                .attr("y", function (d) {
                            return d.children || d['_children'] ? -18 : 18;
                        })
                        .attr("dy", ".35em")
                        .attr("text-anchor", "middle")
                        .text(function (d) { return d['name']; })
                        .style("fill-opacity", 1e-6);
        // Transition nodes to their new position.
                    //horizontal tree
      let nodeUpdate = node.transition()
                        .duration(this.duration)
                        .attr("transform", function (d) { return "translate(" + d['x'] + "," + d['y'] + ")"; });
          nodeUpdate.select("circle")
                        .attr("r", 10)
                        .style("fill", function (d) { return d['_children'] ? "lightsteelblue" : "#fff"; });
          nodeUpdate.select("text")
                        .style("fill-opacity", 1);
        let nodeExit = node.exit().transition()
                        .duration(this.duration)
                        .attr("transform", function (d) { return "translate(" + source.x + "," + source.y + ")"; })
                        .remove();
            nodeExit.select("circle")
                        .attr("r", 1e-6);
            nodeExit.select("text")
                        .style("fill-opacity", 1e-6);
       // Update the links…
       // Declare the links…
       let link = svg.selectAll("path.link")
           .data(links, function (d) { return d['target'].id; });
       // Enter the links.
       link.enter().insert("path", "g")
           .attr("class", "link")
           .attr("d", function (d) {
               var o = { x: source.x0, y: source.y0 };
               return diagonal({ source: o, target: o });
           });  
       // Transition links to their new position.
       link.transition()
           .duration(this.duration)
           .attr("d", diagonal);
         // Transition exiting nodes to the parent's new position.
         link.exit().transition()
         .duration(this.duration)
         .attr("d", function (d) {
             var o = { x: source.x, y: source.y };
             return diagonal({ source: o, target: o });
         })
         .remove();

        // Stash the old positions for transition.
        nodes.forEach(function (d: any) {
          d['x0'] = d.x;
          d['y0'] = d.y;
        });
    };
    update(root);

  }

}
