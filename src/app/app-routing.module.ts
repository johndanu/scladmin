import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddQuestionComponent } from './quiz-upload/add-question/add-question.component';
import { ExamPaperComponent } from './quiz-upload/exam-paper/exam-paper.component';
import { GetInstituteComponent } from './quiz-upload/get-institute/get-institute.component';
import { InstituteComponent } from './quiz-upload/institute/institute/institute.component';
import { QuizListComponent } from './quiz-upload/quiz-list/quiz-list.component';
import { QuizUploadComponent } from './quiz-upload/quiz-upload.component';
import { StreamComponent } from './quiz-upload/stream/stream.component';
import { SubjectAddComponent } from './quiz-upload/subject/subject-add/subject-add.component';
import { ViewQuestionComponent } from './quiz-upload/view-question/view-question.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add-quiz',
    component: QuizUploadComponent
  },
  {
    path: 'list',
    component: QuizListComponent
  },
  {
    path: 'add-question/:id',
    component: AddQuestionComponent
  },
  {
    path: 'subject',
    component: SubjectAddComponent
  },
  {
    path: 'institute',
    component:InstituteComponent
  },
  {
    path: 'stream',
    component:StreamComponent
  },
  {
    path: 'exam-paper/:id',
    component:ExamPaperComponent
  },
  {
    path: 'view-question/:id',
    component:ViewQuestionComponent
  },
  {
    path: 'get-institute',
    component:GetInstituteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
