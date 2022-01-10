import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject-add',
  templateUrl: './subject-add.component.html',
  styleUrls: ['./subject-add.component.css']
})
export class SubjectAddComponent implements OnInit {
  public subjects = new FormGroup({
    subject :new FormControl('')
  })
  constructor(private subjectService:SubjectService) { }

  ngOnInit(): void {
  }

  subjectSubmit(){
    console.log(this.subjects.value);
    this.subjectService.PostSubject(this.subjects.value).subscribe((result:any)=>{
      console.log(result);
      this.subjects.reset()
      
    })
  }
}
