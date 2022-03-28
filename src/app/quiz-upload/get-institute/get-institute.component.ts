import { Component, OnInit } from '@angular/core';
import { InstituteComponent } from '../institute/institute/institute.component';
import { IntituteService } from 'src/app/services/institute.service';

@Component({
  selector: 'app-get-institute',
  templateUrl: './get-institute.component.html',
  styleUrls: ['./get-institute.component.css']
})
export class GetInstituteComponent implements OnInit {

  constructor(private instituteService:IntituteService) { }

  public institutes: any = []
  public loading = true;
  ngOnInit(): void {
    this.instituteService.getInstitutes()
      .subscribe(
        data => this.institutes = data,
        err=>{
          console.log(err);
        },
        ()=>{
          this.loading = false
        }

      )
  }

}
