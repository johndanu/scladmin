import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IInstitute } from '../models/institute';

@Injectable({
  providedIn: 'root'
})
export class IntituteService {
  configUrl = environment.apiUrl + '/institute'
  constructor(private _http: HttpClient) { }

  getInstitutes(): Observable<IInstitute[]> {
    console.log(environment.apiUrl);

    return this._http.get<IInstitute[]>(this.configUrl)
  }

  postInstitute(data: any) {
    console.log(environment.apiUrl);

    return this._http.post(this.configUrl, data)
  }
}
