import { Component, OnInit, Input } from '@angular/core';
import { NodeModel, Diagram, ConnectorModel, SnapSettingsModel, SnapConstraints } from '@syncfusion/ej2-angular-diagrams';
import { DataManager } from "@syncfusion/ej2-data";

@Component({
  selector: 'app-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.scss']
})
export class OrgChartComponent implements OnInit {
  display: Boolean = false;
  @Input('orgdata') public Data;
  public snapSettings: SnapSettingsModel = {
    // Display both Horizontal and Vertical gridlines
    // constraints:  SnapConstraints.ShowLines,
    constraints:  null,
  //   horizontalGridlines: {
  //     // Sets the line color of gridlines
  //     lineColor: 'blue',
  //     // Defines the lineDashArray of gridlines
  //     lineDashArray: '2 2'
  // },
  // // Defines the verticalGridlines for SnapSettings
  // verticalGridlines: {
  //     lineColor: 'blue',
  //     lineDashArray: '2 2'
  // }
};
  constructor() { }

  ngOnInit(): void {
    console.log(this.Data);
    this.data = {
      //Set the unique field from data source
     id: 'id', 
     //Set the field, which is used to identify the reporting person
     parentId: 'manager', 
     //Define the employee data
     dataManager: new DataManager(this.Data),
     doBinding: (nodeModel: NodeModel, data: object, diagram: Diagram) => {
         //You will get the employee information in data argument and bind that value directly to node's built-in properties.
         nodeModel.annotations = [{ content: (data as any).role }];
         nodeModel.style = { fill: (data as any).color };
     }
   };
    setTimeout(() => {
      this.display = true;
    }, 1000);
  }


  // public Data: any = [
  //   { 'id': 'parent', 'role': 'Board', 'color': '#71AF17' },
  //   { 'id': '1', 'role': 'General Manager', 'manager': 'parent', 'color': '#71AF17' },
  //   { 'id': '2', 'role': 'Human Resource Manager', 'manager': '1', 'color': '#1859B7' },
  //   { 'id': '3', 'role': 'Trainers', 'manager': '2', 'color': '#2E95D8' },
  //   { 'id': '4', 'role': 'Recruiting Team', 'manager': '2', 'color': '#2E95D8' }, 
  //   { 'id': '6', 'role': 'Design Manager', 'manager': '1', 'color': '#1859B7' },
  //   { 'id': '7', 'role': 'Design Supervisor', 'manager': '6', 'color': '#2E95D8' },
  //   { 'id': '8', 'role': 'Development Supervisor', 'manager': '6', 'color': '#2E95D8' },
  //   { 'id': '10', 'role': 'Operations Manager', 'manager': '1', 'color': '#1859B7' },
  //   { 'id': '11', 'role': 'Statistics Department', 'manager': '10', 'color': '#2E95D8' },
  //   { 'id': '12', 'role': 'Logistics Department', 'manager': '10', 'color': '#2E95D8' },
  //   { 'id': '16', 'role': 'Marketing Manager', 'manager': '1', 'color': '#1859B7' },
  //   { 'id': '17', 'role': 'Overseas Sales Manager', 'manager': '16', 'color': '#2E95D8' }, 
  //   { 'id': '20', 'role': 'Service Department Manager', 'manager': '16', 'color': '#2E95D8' }
  //   ];
 
    public data: Object = {
         //Set the unique field from data source
        id: 'id', 
        //Set the field, which is used to identify the reporting person
        parentId: 'manager', 
        //Define the employee data
        dataManager: new DataManager(this.Data),
        doBinding: (nodeModel: NodeModel, data: object, diagram: Diagram) => {
            //You will get the employee information in data argument and bind that value directly to node's built-in properties.
            nodeModel.annotations = [{ content: (data as any).role }];
            nodeModel.style = { fill: (data as any).color };
        }
    };
    public layout: Object = {
         //Set the layout type
        type: 'OrganizationalChart' 
    };
 
    //Defines the default node and connector properties
    public nodeDefaults(obj: NodeModel) : NodeModel {
      obj.annotations[0].style.color = "white";
      obj.width = 120; 
      return obj;
    };
    public connDefaults(connector: ConnectorModel, diagram: Diagram) : ConnectorModel {
        connector.type = 'Orthogonal';
        connector.targetDecorator = { shape: 'None' };
        return connector;
    }

}
