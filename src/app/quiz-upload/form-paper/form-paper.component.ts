import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../../services/quiz-service.service';
import { IntituteService } from '../../services/institute.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-form-paper',
  templateUrl: './form-paper.component.html',
  styleUrls: ['./form-paper.component.css']
})
export class FormPaperComponent implements OnInit {
  public institutes: any = []
  public subjects: any = []
  public paper = new FormGroup({
    InstituteID: new FormControl('',Validators.required),
    SubjectName: new FormControl(''),
    ExamPaperName: new FormControl(''),
    Grade: new FormControl('')
  })

  constructor(private quizService: QuizServiceService,
    private instituteService: IntituteService,
    private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.instituteService.getInstitutes()
      .subscribe(
        (data) => {
          this.institutes = data
          console.log(data);
        }
      )
    this.subjectService.GetSubject()
      .subscribe(
        data => this.subjects = data
      )
  }
  onSubmit() {
    console.log(this.paper.value);
    this.quizService.AddPaper(this.paper.value)
      .subscribe(
        (data: any) => console.log('success', data),
        (error: any) => console.log('error')
      )

  }

}
