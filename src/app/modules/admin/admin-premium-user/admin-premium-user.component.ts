import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

export interface PeriodicElement {
  position: number;
  name: string;
  course: string;
  startDate: string;
  endDate: string;
  progress: string;
  group: string;
  mentor: string;
  courseExtended: string;
  mentorHrsUpgraded: string;
  email: string;
  phoneNumber: string;
  amountPaid: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1,  name: 'Ankit Barjatya', course: 'Machine Learning', startDate: '23rd Jun 2020', endDate: '23rd Aug 2020', progress: '40%', group: 'Machine Learning_01', mentor: 'Aditya Agrawal', courseExtended: '1 month', mentorHrsUpgraded: '2 hours', email: 'ankit.barjatya@gmail.com', phoneNumber: '226-390-3331', amountPaid: '50, 000'},
  { position: 2,  name: 'Ankit Barjatya', course: 'Machine Learning', startDate: '23rd Jun 2020', endDate: '23rd Aug 2020', progress: '40%', group: 'Machine Learning_01', mentor: 'Aditya Agrawal', courseExtended: '1 month', mentorHrsUpgraded: '2 hours', email: 'ankit.barjatya@gmail.com', phoneNumber: '226-390-3331', amountPaid: '50, 000'},
  { position: 3,  name: 'Ankit Barjatya', course: 'Machine Learning', startDate: '23rd Jun 2020', endDate: '23rd Aug 2020', progress: '40%', group: 'Machine Learning_01', mentor: 'Aditya Agrawal', courseExtended: '1 month', mentorHrsUpgraded: '2 hours', email: 'ankit.barjatya@gmail.com', phoneNumber: '226-390-3331', amountPaid: '50, 000'},
  { position: 4,  name: 'Ankit Barjatya', course: 'Machine Learning', startDate: '23rd Jun 2020', endDate: '23rd Aug 2020', progress: '40%', group: 'Machine Learning_01', mentor: 'Aditya Agrawal', courseExtended: '1 month', mentorHrsUpgraded: '2 hours', email: 'ankit.barjatya@gmail.com', phoneNumber: '226-390-3331', amountPaid: '50, 000'},
  { position: 5,  name: 'Ankit Barjatya', course: 'Machine Learning', startDate: '23rd Jun 2020', endDate: '23rd Aug 2020', progress: '40%', group: 'Machine Learning_01', mentor: 'Aditya Agrawal', courseExtended: '1 month', mentorHrsUpgraded: '2 hours', email: 'ankit.barjatya@gmail.com', phoneNumber: '226-390-3331', amountPaid: '50, 000'},
  { position: 6,  name: 'Ankit Barjatya', course: 'Machine Learning', startDate: '23rd Jun 2020', endDate: '23rd Aug 2020', progress: '40%', group: 'Machine Learning_01', mentor: 'Aditya Agrawal', courseExtended: '1 month', mentorHrsUpgraded: '2 hours', email: 'ankit.barjatya@gmail.com', phoneNumber: '226-390-3331', amountPaid: '50, 000'},
  { position: 7,  name: 'Ankit Barjatya', course: 'Machine Learning', startDate: '23rd Jun 2020', endDate: '23rd Aug 2020', progress: '40%', group: 'Machine Learning_01', mentor: 'Aditya Agrawal', courseExtended: '1 month', mentorHrsUpgraded: '2 hours', email: 'ankit.barjatya@gmail.com', phoneNumber: '226-390-3331', amountPaid: '50, 000'},
  { position: 8,  name: 'Ankit Barjatya', course: 'Machine Learning', startDate: '23rd Jun 2020', endDate: '23rd Aug 2020', progress: '40%', group: 'Machine Learning_01', mentor: 'Aditya Agrawal', courseExtended: '1 month', mentorHrsUpgraded: '2 hours', email: 'ankit.barjatya@gmail.com', phoneNumber: '226-390-3331', amountPaid: '50, 000'},
  { position: 9,  name: 'Ankit Barjatya', course: 'Machine Learning', startDate: '23rd Jun 2020', endDate: '23rd Aug 2020', progress: '40%', group: 'Machine Learning_01', mentor: 'Aditya Agrawal', courseExtended: '1 month', mentorHrsUpgraded: '2 hours', email: 'ankit.barjatya@gmail.com', phoneNumber: '226-390-3331', amountPaid: '50, 000'},
  { position: 10, name: 'Ankit Barjatya', course: 'Machine Learning', startDate: '23rd Jun 2020', endDate: '23rd Aug 2020', progress: '40%', group: 'Machine Learning_01', mentor: 'Aditya Agrawal', courseExtended: '1 month', mentorHrsUpgraded: '2 hours', email: 'ankit.barjatya@gmail.com', phoneNumber: '226-390-3331', amountPaid: '50, 000'},
];

@Component({
  selector: 'app-admin-premium-user',
  templateUrl: './admin-premium-user.component.html',
  styleUrls: ['./admin-premium-user.component.scss']
})
export class AdminPremiumUserComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'Name', 'Course', 'Start Date', 'End Date', 'Progress', 'Group', 'Mentor', 'Course Extended', 'Mentor Hrs Upgraded', 'Email', 'Phone Number', 'Amount Paid', 'Internship'];
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
