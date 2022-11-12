import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperateurService {

  constructor(private httpClient: HttpClient) { }

  getAllOperateurs() {
    return this.httpClient.get(`${environment.url}/operateur/retrieve-all-operateurs`)
  }
  addOperateur(operateur : any) {
    return this.httpClient.post(`${environment.url}/operateur/add-operateur`, operateur)
  }
  editOperateur(operateur : any){
    return this.httpClient.put(`${environment.url}/operateur/modify-operateur`, operateur)
  }
  deleteOperateur(idOperateur : any){
    return  this.httpClient.delete(`${environment.url}/operateur/remove-operateur/${idOperateur}`)
  }
}
