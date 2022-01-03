import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISubject } from '../models/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  configUrl = environment.apiUrl + '/subject'

  constructor(private _http: HttpClient) { }

  GetSubject(): Observable<ISubject[]> {
    return this._http.get<ISubject[]>(this.configUrl)
  }

  GetSubjectById(id: any) {
    const url: string = this.configUrl + "/" + id;
    let subject
    this._http.get(url).subscribe(res => subject = res)
    console.log(subject)

  }
}
