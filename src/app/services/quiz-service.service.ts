import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { IQuiz } from '../models/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {
  private configUrl = environment.apiUrl + '/quiz'

  constructor(private router: Router, private _http: HttpClient) { }



  AddPaper(data: any) {
    return this._http.post<any>(this.configUrl, data)
  }

  GetQuiz(): Observable<IQuiz[]> {
    return this._http.get<IQuiz[]>(this.configUrl)
  }
}
