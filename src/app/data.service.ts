import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

interface IProductDetails {
  productId: number,
  weight: string,
  title: string,
  price: string
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  getProductDetails() {
    return this.http.get('https://raw.githubusercontent.com/mondeChrishiv/monde/master/product_details.json')
  }
}
