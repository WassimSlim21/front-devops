import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor(private httpClient: HttpClient) { }

  getAllFactures() {
    return this.httpClient.get(`${environment.url}/facture/retrieve-all-factures`)
  }
  addFacture(facture : any) {
    return this.httpClient.post(`${environment.url}/facture/add-facture`, facture)
  }
}
