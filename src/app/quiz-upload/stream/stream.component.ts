import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { StreamService } from 'src/app/services/stream.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})

export class StreamComponent implements OnInit {
  public subjects: any = []
  public selectedSubject :any =[]  
  public streams = new FormGroup({
    StreamName:new FormControl(''),
    SubjectName:new FormArray([]),
    Grade:new FormArray([])
  })
  constructor(private streamService:StreamService,
    private subjectService: SubjectService) { }

    

    get gradeControl(){
      return (<FormArray>this.streams.get('Grade')).controls
    }

    get subject(){
      return (<FormArray>this.streams.get('SubjectName')).controls
    }

  ngOnInit(): void {
    this.subjectService.GetSubject()
    .subscribe(
      data => this.subjects = data
    )
   
  }

  onAddGrade(){
    const control = new FormControl(null,[]);
    (<FormArray>this.streams.get('Grade')).push(control);
  }

  getSubject(e:any,subject:string){
      if (e.target.checked) {
        console.log(subject + "c");
        this.selectedSubject.push(subject)

        const control = new FormControl();
        (<FormArray>this.streams.get('SubjectName')).push(control);

  
        
      }else{
        console.log(subject + "uc");
        this.selectedSubject = this.selectedSubject.filter((m:any)=>m!=subject);
      }

      console.log(this.selectedSubject);
      
  }

  addStream(){
    console.log(this.streams.value);
    this.streams.value.SubjectName = this.selectedSubject;
    this.streamService.PostStream(this.streams.value).subscribe((result:any)=>{
      console.log(result);
      this.streams.reset()
  })
}


}