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

  constructor(public quizService: QuizServiceService, private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.heading = "ALL EXAM PAPERS"
    this.quizService.GetQuiz("all")
      .subscribe(
        data => this.quizzess = data
      )
  }
  subject(id: any) {
    // this.subjectService.GetSubjectById(id)
    return "hellooo"
  }

  onItemSelector(Boolvalue:any) {
    if (Boolvalue == true) {
      this.heading = "PUBLISHED EXAM PAPERS"
    } else {
      this.heading = "NOT PUBLISHED EXAM PAPERS"
    }
    this.quizService.quizState = Boolvalue
    this.quizService.GetQuiz(Boolvalue)
    .subscribe(
      data => this.quizzess = data
    )
    }

}
