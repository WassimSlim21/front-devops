import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private httpClient: HttpClient) { }

  getAllStocks() {
    return this.httpClient.get(`${environment.url}/stock/retrieve-all-stocks`)
  }
  addStock(stock : any) {
    return this.httpClient.post(`${environment.url}/stock/add-stock`, stock)
  }
  editStock(stock : any){
    return this.httpClient.put(`${environment.url}/stock/modify-stock`, stock)
  }
  deleteStock(idStock : any){
    return  this.httpClient.delete(`${environment.url}/stock/remove-stock/${idStock}`)
  }
}
