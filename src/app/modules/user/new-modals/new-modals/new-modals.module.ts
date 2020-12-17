import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestModalComponent } from './components/test-modal/test-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/modules/core/core.module';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { PlayConfirmationComponent } from './components/play-confirmation/play-confirmation.component';
import { IncorrectAnswerComponent } from './components/incorrect-answer/incorrect-answer.component';



@NgModule({
  declarations: [TestModalComponent, AssignmentComponent, PlayConfirmationComponent, IncorrectAnswerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class NewModalsModule { }
