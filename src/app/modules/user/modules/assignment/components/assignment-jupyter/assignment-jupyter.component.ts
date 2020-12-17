import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-assignment-jupyter',
  templateUrl: './assignment-jupyter.component.html',
  styleUrls: ['./assignment-jupyter.component.scss']
})
export class AssignmentJupyterComponent implements OnInit {

  iframeUrl;
  expandManu : Boolean = false;
  constructor(public route: ActivatedRoute,
              private sanitizer: DomSanitizer,
              private router: Router,
              private auth: AuthService) {
    let token;
    this.auth.activeUserToken.subscribe(res => token = res);
    this.route.queryParams.subscribe(params => {
      if (params.tag) {
        this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${environment.jupyterhub}user-redirect/notebooks/${params.hidePsga === 'hide' ? 'Assignments/Assignments_Solutions' : 'Assignments'}/chapter-${params.chapter_slno}/${params.tag}.ipynb?assignmentId=${params.assignmentId}&token=${token}&timegiven=${params.timegiven}`);
      }
    });
  }

  ngOnInit(): void {
  }

  navigateToPreviousPage() {
    this.router.navigateByUrl(this.route.snapshot.queryParams.prevUrl);
  }

  openpsgaGraph() {
    this.router.navigate(['user/assignment/psggraph'], {
      queryParams: {...this.route.snapshot.queryParams,
      prevUrl: this.router.url
     }
    });
  }

}
