import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SecteurActiviteService {

  constructor(private httpClient: HttpClient) { }

  getAllSecteurActivites() {
    return this.httpClient.get(`${environment.url}/secteurActivite/retrieve-all-secteurActivite`)
  }
  addSecteurActivite(secteurActivite : any) {
    return this.httpClient.post(`${environment.url}/secteurActivite/add-secteurActivite`, secteurActivite)
  }
  editSecteurActivite(secteurActivite : any){
    return this.httpClient.put(`$${environment.url}/secteurActivite/modify-secteurActivite`, secteurActivite)
  }
  deleteSecteurActivite(idSecteurActivite : any){
    return  this.httpClient.delete(`$${environment.url}/secteurActivite/remove-secteurActivite/${idSecteurActivite}`)
  }
}
