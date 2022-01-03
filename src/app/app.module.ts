import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './mat.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizUploadComponent } from './quiz-upload/quiz-upload.component';
import { FormPaperComponent } from './quiz-upload/form-paper/form-paper.component';
import { QuizListComponent } from './quiz-upload/quiz-list/quiz-list.component';
import { AddQuestionComponent } from './quiz-upload/add-question/add-question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizUploadComponent,
    FormPaperComponent,
    QuizListComponent,
    AddQuestionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
