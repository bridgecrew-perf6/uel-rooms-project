import { Injectable } from '@angular/core';
import * as arrayToTree from 'array-to-tree';

@Injectable({
  providedIn: 'root'
})
export class DataloaderService {

  constructor() { }

   //The next two function are responsible to converting the data from a nodes-links double flat arrays into hierachical stucture
    //I used them because this project handle both data types. 
   //"findroot" gets the nodes and links data and find the root node. 
   //Then, it calls "createTree" which transform this node into a tree object 
   findRoot (nodes, links) {
    let rootNode;
    var isRoot = true;
    for (let i=0; i < nodes.length; i++){
      isRoot = true;
    for (let j=0; j < links.length; j++){
        if (links[j].source.id? nodes[i].id == links[j].source.id: nodes[i].id == links[j].source){
        isRoot = false;
        break;
    }
  }
    if (isRoot) {
      rootNode = nodes[i];
      return (this.createTree(rootNode, nodes, links));
             }
        } 
    }
   createTree(root, nodes, links) {

    for (let i=0; i < nodes.length; i++) {
      for (let j=0; j < links.length; j++){
        if (links[j].source.id? nodes[i].id == links[j].source.id: nodes[i].id == links[j].source){
          nodes[i].parent_id = links[j].target.id? links[j].target.id: links[j].target
        }
    }
   }
   let rootNode = (arrayToTree(nodes))
   return rootNode[0];
  } 
}
