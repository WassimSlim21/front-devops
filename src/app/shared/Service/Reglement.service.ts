import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReglementService {

  constructor(private httpClient: HttpClient) {
  }


  addReglement(reglement: any) {
    return this.httpClient.post(`${environment.url}/reglement/add-reglement`, reglement)
  }

  getAllReglements() {
    return this.httpClient.get(`${environment.url}/reglement/retrieve-all-reglements`)
  }


}
