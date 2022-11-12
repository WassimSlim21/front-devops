import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  apiPost(endpoint :any, body:any) {
    return this.http.post(environment.url + endpoint, body);
  }
  apiGetAll(endpoint:any) {
    return this.http.get(environment.url + endpoint);
  }
  apiPut(endpoint:any, body:any) {
    return this.http.put(environment.url+ endpoint, body);
  }
  apiDelete(endpoint:any) {
    return this.http.delete(environment.url + endpoint);
  }
}
