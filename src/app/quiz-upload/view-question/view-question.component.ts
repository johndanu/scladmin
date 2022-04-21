import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ExamPaperService } from 'src/app/services/exam-paper.service';
@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})



export class ViewQuestionComponent implements OnInit {
  public id:any
  constructor(private examPaper: ExamPaperService,private route: ActivatedRoute) { }
  public examPapers: any = []
  public loading = true;
  ngOnInit(): void {
    this.route.params.subscribe( params =>{
      this.id = params.id;
    });
    this.examPaper.getExamPaper(this.id)
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

  publish(id:any){
    console.log(id);
    let obj = {
      Published:true
    }
    this.examPaper.editState(id,obj).subscribe(data=>{
      console.log("ok");
     
    },
    err=>console.log(err),
    ()=>{
      console.log('success')
  }
    )
  }

}
