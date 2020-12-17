import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material';

export interface PeriodicElement {
  student: string;
  startDate: string;
  endDate: string;
  progress: string;
  group: string;
  hoursConsumed: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { student: 'Ankit Barjatya', startDate: 'Dec 2nd, 2020', endDate: 'Mar 2nd, 2020', progress: '25%', group: 'Cloud Computing_3', hoursConsumed: '8'  },
  { student: 'Ankit Barjatya', startDate: 'Dec 2nd, 2020', endDate: 'Mar 2nd, 2020', progress: '25%', group: 'Cloud Computing_3', hoursConsumed: '8'  },
  { student: 'Ankit Barjatya', startDate: 'Dec 2nd, 2020', endDate: 'Mar 2nd, 2020', progress: '25%', group: 'Cloud Computing_3', hoursConsumed: '8'  },
  { student: 'Ankit Barjatya', startDate: 'Dec 2nd, 2020', endDate: 'Mar 2nd, 2020', progress: '25%', group: 'Cloud Computing_3', hoursConsumed: '8'  },
  { student: 'Ankit Barjatya', startDate: 'Dec 2nd, 2020', endDate: 'Mar 2nd, 2020', progress: '25%', group: 'Cloud Computing_3', hoursConsumed: '8'  },
  { student: 'Ankit Barjatya', startDate: 'Dec 2nd, 2020', endDate: 'Mar 2nd, 2020', progress: '25%', group: 'Cloud Computing_3', hoursConsumed: '8'  },
  { student: 'Ankit Barjatya', startDate: 'Dec 2nd, 2020', endDate: 'Mar 2nd, 2020', progress: '25%', group: 'Cloud Computing_3', hoursConsumed: '8'  },
  { student: 'Ankit Barjatya', startDate: 'Dec 2nd, 2020', endDate: 'Mar 2nd, 2020', progress: '25%', group: 'Cloud Computing_3', hoursConsumed: '8'  },
  { student: 'Ankit Barjatya', startDate: 'Dec 2nd, 2020', endDate: 'Mar 2nd, 2020', progress: '25%', group: 'Cloud Computing_3', hoursConsumed: '8'  },
  { student: 'Ankit Barjatya', startDate: 'Dec 2nd, 2020', endDate: 'Mar 2nd, 2020', progress: '25%', group: 'Cloud Computing_3', hoursConsumed: '8'  },
  { student: 'Ankit Barjatya', startDate: 'Dec 2nd, 2020', endDate: 'Mar 2nd, 2020', progress: '25%', group: 'Cloud Computing_3', hoursConsumed: '8'  },
  { student: 'Ankit Barjatya', startDate: 'Dec 2nd, 2020', endDate: 'Mar 2nd, 2020', progress: '25%', group: 'Cloud Computing_3', hoursConsumed: '8'  },
  { student: 'Ankit Barjatya', startDate: 'Dec 2nd, 2020', endDate: 'Mar 2nd, 2020', progress: '25%', group: 'Cloud Computing_3', hoursConsumed: '8'  },
  { student: 'Ankit Barjatya', startDate: 'Dec 2nd, 2020', endDate: 'Mar 2nd, 2020', progress: '25%', group: 'Cloud Computing_3', hoursConsumed: '8'  },
  { student: 'Ankit Barjatya', startDate: 'Dec 2nd, 2020', endDate: 'Mar 2nd, 2020', progress: '25%', group: 'Cloud Computing_3', hoursConsumed: '8'  },
  { student: 'Ankit Barjatya', startDate: 'Dec 2nd, 2020', endDate: 'Mar 2nd, 2020', progress: '25%', group: 'Cloud Computing_3', hoursConsumed: '8'  },
  { student: 'Ankit Barjatya', startDate: 'Dec 2nd, 2020', endDate: 'Mar 2nd, 2020', progress: '25%', group: 'Cloud Computing_3', hoursConsumed: '8'  },
  { student: 'Ankit Barjatya', startDate: 'Dec 2nd, 2020', endDate: 'Mar 2nd, 2020', progress: '25%', group: 'Cloud Computing_3', hoursConsumed: '8'  },
  { student: 'Ankit Barjatya', startDate: 'Dec 2nd, 2020', endDate: 'Mar 2nd, 2020', progress: '25%', group: 'Cloud Computing_3', hoursConsumed: '8'  },
  { student: 'Ankit Barjatya', startDate: 'Dec 2nd, 2020', endDate: 'Mar 2nd, 2020', progress: '25%', group: 'Cloud Computing_3', hoursConsumed: '8'  },
  { student: 'Ankit Barjatya', startDate: 'Dec 2nd, 2020', endDate: 'Mar 2nd, 2020', progress: '25%', group: 'Cloud Computing_3', hoursConsumed: '8'  },
  { student: 'Ankit Barjatya', startDate: 'Dec 2nd, 2020', endDate: 'Mar 2nd, 2020', progress: '25%', group: 'Cloud Computing_3', hoursConsumed: '8'  },
  { student: 'Ankit Barjatya', startDate: 'Dec 2nd, 2020', endDate: 'Mar 2nd, 2020', progress: '25%', group: 'Cloud Computing_3', hoursConsumed: '8'  },
  { student: 'Ankit Barjatya', startDate: 'Dec 2nd, 2020', endDate: 'Mar 2nd, 2020', progress: '25%', group: 'Cloud Computing_3', hoursConsumed: '8'  }
];

@Component({
  selector: 'app-mentor-students',
  templateUrl: './mentor-students.component.html',
  styleUrls: ['./mentor-students.component.scss']
})
export class MentorStudentsComponent implements OnInit {

  displayedColumns: string[] = ['Student', 'Start Date', 'End Date', 'Progress', 'Group', 'Hours Consumed', 'Actions'];
  dataSource = ELEMENT_DATA;

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB');
  }

  ngOnInit(): void {
  }

}
