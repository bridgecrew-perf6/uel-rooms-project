import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicFooterComponent } from './components/public-footer/public-footer.component';
import { TimerComponent } from './components/timer/timer.component';
import { MatSidenavModule, MatToolbarModule, MatInputModule, MatIconModule, MatMenuModule, MatSelectModule, MatExpansionModule, MatTableModule, MatDialogModule, MatButtonModule, MatTabsModule, MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatCheckboxModule } from '@angular/material';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { RatingModule } from 'ngx-bootstrap/rating';



@NgModule({
  declarations: [PublicFooterComponent, TimerComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    TabsModule,
    MatInputModule,
    MatIconModule,
    ProgressbarModule.forRoot(),
    MatMenuModule,
    MatSelectModule,
    MatExpansionModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatCheckboxModule,
    PaginationModule.forRoot(),
    RatingModule.forRoot()
  ],
  exports: [
    PublicFooterComponent,
    TimerComponent,
    MatSidenavModule,
    MatToolbarModule,
    TabsModule,
    MatInputModule,
    MatIconModule,
    ProgressbarModule,
    MatMenuModule,
    MatSelectModule,
    MatExpansionModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatCheckboxModule,
    PaginationModule,
    RatingModule
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class CoreModule { }
