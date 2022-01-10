import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IntituteService } from 'src/app/services/institute.service';

@Component({
  selector: 'app-institute',
  templateUrl: './institute.component.html',
  styleUrls: ['./institute.component.css']
})
export class InstituteComponent implements OnInit {
public institutes = new FormGroup({
  name:new FormControl(''),
  address:new FormControl(''),
  city:new FormControl(''),
  phoneNo:new FormControl(''),
  logo:new FormControl('')
  
})
public selectedImage:any;
public image:any;


  constructor(private instituteService:IntituteService) { }

  ngOnInit(): void {
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


instituteSubmit(){
  if (this.selectedImage === undefined) {

    this.instituteService.postInstitute(this.institutes.value).subscribe((data:any)=>{
      console.log(data);
      //console.log(this.institutes.value);

    }, err => {
      console.log(err);
    }, () => {
      this.institutes.reset()
      this.image = ''
    })
  }else{
    console.log("image");
    
    const formData = new FormData();
    formData.append('logo',this.selectedImage,this.selectedImage.name);
    console.log(formData);
    
    for (var key in this.institutes.value) {
      formData.append(key, this.institutes.value[key]);
    }
    this.instituteService.postInstitute(formData).subscribe((data:any)=>{
      console.log(data);
     // console.log(this.institutes.value);

    }
    , err => {
      console.log(err);
    }, () => {
      this.institutes.reset()
      this.image = ''
    })
  }

}
}