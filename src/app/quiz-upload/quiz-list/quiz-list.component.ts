import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from 'src/app/services/quiz-service.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {
  public quizzess: any = [] 
  public heading: string = '';
  public isButtonVisible1 = true;
  public isButtonVisible2 = true;
  public isButtonVisible3 = true;
  constructor(public quizService: QuizServiceService, private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.heading = "ALL EXAM PAPERS"
    this.quizService.GetQuiz(false)
      .subscribe(
        data => this.quizzess = data
        
      )
      this.isButtonVisible2 = false
  }
  subject(id: any) {
    // this.subjectService.GetSubjectById(id)
    return "hellooo"
  }

  onItemSelector(Boolvalue:any) {
    if (Boolvalue == true) {
      this.heading = "PUBLISHED EXAM PAPERS"
      this.isButtonVisible1 = false
      this.isButtonVisible2 = true
      this.isButtonVisible3 = true
    } else if(Boolvalue == false) {
      this.heading = "NOT PUBLISHED EXAM PAPERS"
      this.isButtonVisible1 = true
      this.isButtonVisible2 = false
      this.isButtonVisible3 = true
    }else{
      this.heading = "ALL EXAM PAPERS"
      this.isButtonVisible1 = true
      this.isButtonVisible2 = true
      this.isButtonVisible3 = false
    }
    this.quizService.quizState = Boolvalue
    this.quizService.GetQuiz(Boolvalue)
    .subscribe(
      data => this.quizzess = data
    )
    }

}
