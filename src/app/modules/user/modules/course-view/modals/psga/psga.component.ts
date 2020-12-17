import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseContentService } from '../../services/course-content.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-psga',
  templateUrl: './psga.component.html',
  styleUrls: ['./psga.component.scss']
})
export class PsgaComponent implements OnInit {

  item=[];
  id: any;
  ques:[];
  constructor(private http: HttpClient,
              private courseDetails: CourseContentService,
              @Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit(): void {
    this.change('1', '');
    console.log(this.data);
  }

  change(val, id1) {

  }

  // change(val, id1) {
  //   console.log(id1);
  //   this.courseDetails.psda(this.data.data.tag).subscribe(data2 => {
  //           if(val == "1") {
  //             this.item = data2['data'][0];
  //             this.id =val;
  //             this.http.get("https://bend.aieducator.com/psgaqd", {params: {
  //               tag: JSON.stringify(this.item),
  //             },  }).subscribe( data3 => {
  //               this.ques = data3['ques'];
  //               console.log(this.ques)
  //             });
  //           }

  //           if(val == "2") {
  //               console.log(id1)
  //               this.item = data2['data'][1];
  //               this.id =val;
  //               console.log(this.item)
  //           }

  //           if(val == "3") {
  //             this.item = [data2['data'][1 ]]
  //             console.log(this.item)
  //             this.id =val
  //             this.item = [data2['data'][1 ][0]['question']]
  //             console.log(this.item)
  //             this.http.get("https://bend.aieducator.com/psgaqd", {params: {
  //               tag: JSON.stringify(this.item)
  //             },}).subscribe( data3 => {
  //               console.log(data3)
  //               this.ques = data3['ques'];
  //               console.log(this.ques)
  //             }) 
  //           }

  //           if(val == "4") {
  //             this.item = data2['data'][3];
  //             this.id =val;
  //           }

  //           if(val == "5") {
  //               this.item = data2['data'][4];
  //               this.id =val;
  //           }
            
  //           if(val == "6") {
  //               this.item = data2['data'][5];
  //               this.id =val;
  //               console.log(this.item)
  //           }
  //           if (val == "7") {
  //                 this.item = data2['data'][6];
  //                 this.id =val;
  //           }
  //           if(val == "8") {
  //                 this.item = data2['data'][7];
  //                 this.id =val;
  //           } 
  //       }
  //   )
  // }

}
