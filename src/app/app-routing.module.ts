import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponent } from './quiz-upload/add-question/add-question.component';
import { QuizListComponent } from './quiz-upload/quiz-list/quiz-list.component';
import { QuizUploadComponent } from './quiz-upload/quiz-upload.component';

const routes: Routes = [
  {path:'add-quiz',
component:QuizUploadComponent},
{
  path:'list',
  component:QuizListComponent
},
{
  path:'add-question/:id',
  component:AddQuestionComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
