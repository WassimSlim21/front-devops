import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  getAllProducts() {
    return this.httpClient.get(`${environment.url}/produit/retrieve-all-produits`)
  }
  addProduct(product : any) {
    return this.httpClient.post(`${environment.url}/produit/add-produit`, product)
  }
  editProduct(product : any){
    return this.httpClient.put(`${environment.url}/produit/modify-produit`, product)
  }
  deleteProduct(idProduct : any){
    return  this.httpClient.delete(`${environment.url}/produit/remove-produit/${idProduct}`)
  }

}
