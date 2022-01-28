import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddQuestionComponent } from './quiz-upload/add-question/add-question.component';
import { InstituteComponent } from './quiz-upload/institute/institute/institute.component';
import { QuizListComponent } from './quiz-upload/quiz-list/quiz-list.component';
import { QuizUploadComponent } from './quiz-upload/quiz-upload.component';
import { StreamComponent } from './quiz-upload/stream/stream.component';
import { SubjectAddComponent } from './quiz-upload/subject/subject-add/subject-add.component';

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
