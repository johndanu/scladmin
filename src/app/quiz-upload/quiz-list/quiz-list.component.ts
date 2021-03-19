import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from 'src/app/services/quiz-service.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {
  public quizzess:any = []

  constructor(private quizService: QuizServiceService) { }

  ngOnInit(): void {
    this.quizService.GetQuiz()
      .subscribe(
        data => this.quizzess = data
      )
  }

}
