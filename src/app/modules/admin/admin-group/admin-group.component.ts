import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

export interface PeriodicElement {
  position: number;
  groupName: string;
  course: string;
  date: string;
  student: string;
  mentorName: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1,  groupName: 'Machine Learning_01', course: 'Machine Learning', date: '22rd Jun 2020 - 22nd Jul 2020', student: '3', mentorName: 'Aditya Agrawal'},
  { position: 2,  groupName: 'Machine Learning_01', course: 'Machine Learning', date: '22rd Jun 2020 - 22nd Jul 2020', student: '3', mentorName: 'Aditya Agrawal'},
  { position: 3,  groupName: 'Machine Learning_01', course: 'Machine Learning', date: '22rd Jun 2020 - 22nd Jul 2020', student: '3', mentorName: 'Aditya Agrawal'},
  { position: 4,  groupName: 'Machine Learning_01', course: 'Machine Learning', date: '22rd Jun 2020 - 22nd Jul 2020', student: '3', mentorName: 'Aditya Agrawal'},
  { position: 5,  groupName: 'Machine Learning_01', course: 'Machine Learning', date: '22rd Jun 2020 - 22nd Jul 2020', student: '3', mentorName: 'Aditya Agrawal'},
  { position: 6,  groupName: 'Machine Learning_01', course: 'Machine Learning', date: '22rd Jun 2020 - 22nd Jul 2020', student: '3', mentorName: 'Aditya Agrawal'},
  { position: 7,  groupName: 'Machine Learning_01', course: 'Machine Learning', date: '22rd Jun 2020 - 22nd Jul 2020', student: '3', mentorName: 'Aditya Agrawal'},
  { position: 8,  groupName: 'Machine Learning_01', course: 'Machine Learning', date: '22rd Jun 2020 - 22nd Jul 2020', student: '3', mentorName: 'Aditya Agrawal'},
  { position: 9,  groupName: 'Machine Learning_01', course: 'Machine Learning', date: '22rd Jun 2020 - 22nd Jul 2020', student: '3', mentorName: 'Aditya Agrawal'},
  { position: 10, groupName: 'Machine Learning_01', course: 'Machine Learning', date: '22rd Jun 2020 - 22nd Jul 2020', student: '3', mentorName: 'Aditya Agrawal'},
];

@Component({
  selector: 'app-admin-group',
  templateUrl: './admin-group.component.html',
  styleUrls: ['./admin-group.component.scss']
})
export class AdminGroupComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'Group Name', 'Course', 'Date', 'Student', 'Mentor Name'];
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
