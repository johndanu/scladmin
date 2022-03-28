import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {IExamPaper} from '../models/examPaper'
@Injectable({
  providedIn: 'root'
})
export class ExamPaperService {
  private configUrl = environment.apiUrl + '/quiz/'
  constructor(private router: Router, private _http: HttpClient) { }

  getExamPaper(id:any): Observable<IExamPaper[]> {
    return this._http.get<IExamPaper[]>(this.configUrl+id)
  }
 
}