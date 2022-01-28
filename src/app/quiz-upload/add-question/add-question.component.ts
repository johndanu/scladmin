import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuizServiceService } from 'src/app/services/quiz-service.service';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  public questions = new FormGroup({
    question:new FormControl(''),
    answers:new FormArray([]),
    correctAnswer:new FormControl(''),
    Path:new FormControl('')
    
  })
  public selectedImage:any;
public image:any;
public questionId:any;
  constructor(private questionService:QuizServiceService , private route:ActivatedRoute) { }

  get answersControl(){
    return (<FormArray>this.questions.get('answers')).controls
  }

  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      console.log(data.id);
      this.questionId = data.id;
    })
  }

  onAddAnswers(){
    const control = new FormControl(null,[]);
    (<FormArray>this.questions.get('answers')).push(control);
  }

  imgUpload(event:any){
  
    this.selectedImage = <File>event.target.files[0];
    console.log(this.selectedImage);
    if(event.target.files && event.target.files[0] ){
      const file = event.target.files[0];
      const reader = new FileReader()
      reader.onload = e=>this.image = reader.result;
      reader.readAsDataURL(file)
    }
  }
  questionAdd(){
    if (this.selectedImage === undefined) {

      this.questionService.updateQuestion(this.questions.value,this.questionId).subscribe((data:any)=>{
        console.log(data);
        console.log(this.questions.value);
  
      }, err => {
        console.log(err);
      }, () => {
        this.questions.reset()
        this.image = ''
      })
    }else{
      console.log("image");
      
      const formData = new FormData();
      formData.append('questionImg',this.selectedImage,this.selectedImage.name);
      console.log(formData);
   

      for (var key in this.questions.value) {
           
      if (Array.isArray(this.questions.value[key])) {
        this.questions.value[key].forEach((val:any) => {
          formData.append(`${key}[]`, val);
        });
      } else {
        formData.append(key, this.questions.value[key]);
      }

        // formData.append(key, );
        // console.log(key,"for");
        // console.log(this.questions.value[key],"for");
        
        
      }
      console.log(formData);
      
      this.questionService.updateQuestion(formData,this.questionId).subscribe((data:any)=>{
        console.log(data);
       // console.log(this.institutes.value);
       console.log(this.questions.value);
      }
      , err => {
        console.log(err);
      }, () => {
        this.questions.reset()
        this.image = ''
      })
    }
  }
}
