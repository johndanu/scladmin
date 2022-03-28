import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from "@angular/common/http";


import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { IQuiz } from '../models/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {
  private configUrl = environment.apiUrl + '/quiz/'

  constructor(private router: Router, private _http: HttpClient) { }
public published:any


  AddPaper(data: any) {
    return this._http.post<any>(this.configUrl, data)
  }

  GetQuiz(): Observable<IQuiz[]> {
    let params = new HttpParams();
    params = params.append('published', "true");
    return this._http.get<IQuiz[]>(this.configUrl,{params: params})
    
  }
  updateQuestion(data:any,id:any){
    console.log(data.value);
    
    return this._http.patch(this.configUrl+id ,data)
  }
}
