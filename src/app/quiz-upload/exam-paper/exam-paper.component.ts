import { Component, OnInit } from '@angular/core';
import { ExamPaperService } from 'src/app/services/exam-paper.service';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-exam-paper',
  templateUrl: './exam-paper.component.html',
  styleUrls: ['./exam-paper.component.css']
})
export class ExamPaperComponent implements OnInit {
  
  constructor(private examPaper: ExamPaperService, private activatedRoute: ActivatedRoute) { }
  public examPapers: any = []
  public loading = true;
  ngOnInit(): void {
    let examPaperId ;
     this.activatedRoute.params.subscribe(params => {
      examPaperId = params['id']
    });
    this.examPaper.getExamPaper(examPaperId)
      .subscribe(
        data => this.examPapers = data,
        err=>{
          console.log(err);
        },
        ()=>{
          this.loading = false
        }

      )
  }

}
