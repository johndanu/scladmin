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

  constructor(private quizService: QuizServiceService, private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.quizService.GetQuiz()
      .subscribe(
        data => this.quizzess = data
      )
  }
  subject(id: any) {
    // this.subjectService.GetSubjectById(id)
    return "hellooo"
  }

}
