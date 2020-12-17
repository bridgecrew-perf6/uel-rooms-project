import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface PeriodicElement {
  position: number;
  name: string;
  emailId: string;
  coursePurchased: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Ankit Barjatya', emailId: 'ankit.barjatya@gmail.com', coursePurchased: 'Yes' },
  { position: 2, name: 'Ankit Barjatya', emailId: 'ankit.barjatya@gmail.com', coursePurchased: 'Yes' },
  { position: 3, name: 'Ankit Barjatya', emailId: 'ankit.barjatya@gmail.com', coursePurchased: 'Yes' },
  { position: 4, name: 'Ankit Barjatya', emailId: 'ankit.barjatya@gmail.com', coursePurchased: 'Yes' },
  { position: 5, name: 'Ankit Barjatya', emailId: 'ankit.barjatya@gmail.com', coursePurchased: 'Yes' },
  { position: 6, name: 'Ankit Barjatya', emailId: 'ankit.barjatya@gmail.com', coursePurchased: 'Yes' },
  { position: 7, name: 'Ankit Barjatya', emailId: 'ankit.barjatya@gmail.com', coursePurchased: 'Yes' },
  { position: 8, name: 'Ankit Barjatya', emailId: 'ankit.barjatya@gmail.com', coursePurchased: 'Yes' },
  { position: 9, name: 'Ankit Barjatya', emailId: 'ankit.barjatya@gmail.com', coursePurchased: 'Yes' },
  { position: 10, name: 'Ankit Barjatya', emailId: 'ankit.barjatya@gmail.com', coursePurchased: 'Yes' },
];

@Component({
  selector: 'app-admin-basic-user',
  templateUrl: './admin-basic-user.component.html',
  styleUrls: ['./admin-basic-user.component.scss']
})
export class AdminBasicUserComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'Name', 'Email Id', 'Course Purchased'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  currentPage: Number;
  constructor() { }

  ngOnInit(): void {
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

}
