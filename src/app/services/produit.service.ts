import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  url = environment.url + "/produit/";

  constructor(private http: HttpClient) { }

  addProduit(produit:any){

    return this.http.post<any>(this.url+"add-produit",produit)
  }

  getProduit(id:any){
    return this.http.get<any>(this.url+"retrieve-produit/"+id)
  }

  getAllProduit(id:any){
    return this.http.get<any>(this.url+"retrieve-all-produits")
  }

  updateProduit(prduit:any){
    return this.http.put<any>(this.url+"modify-produit",prduit)
  }

  deleteProduit(id:any){
    return this.http.delete<any>(this.url+"remove-produit/"+id)
  }

}
