import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizUploadComponent } from './quiz-upload/quiz-upload.component';
import { FormPaperComponent } from './quiz-upload/form-paper/form-paper.component';
import { QuizListComponent } from './quiz-upload/quiz-list/quiz-list.component';
import { AddQuestionComponent } from './quiz-upload/add-question/add-question.component';


@NgModule({
  declarations: [
    AppComponent,
    QuizUploadComponent,
    FormPaperComponent,
    QuizListComponent,
    AddQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
