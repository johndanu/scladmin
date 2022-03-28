import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { IInstitute } from '../models/institute';

@Injectable({
  providedIn: 'root'
})
export class IntituteService {
  configUrl = environment.apiUrl + '/institute'
  constructor(private _http: HttpClient) { }                 

  getInstitutes():Observable<IInstitute[]> {
    return this._http.get<IInstitute[]>(this.configUrl)
  }

  postInstitute(data:any){
    return this._http.post(this.configUrl ,data)
  }
}
