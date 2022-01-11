import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StreamService {
  configUrl = environment.apiUrl + '/stream'
  constructor(private _http: HttpClient) { }

  PostStream(data:any){
    return this._http.post(this.configUrl ,data)
  }
}
