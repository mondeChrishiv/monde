import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IProductDetails } from './iproduct-details';

interface IProductDetailsData {
  prodcutId: number,
  weight: string,
  title: string,
  price: string     
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  getProductDetails():Observable<IProductDetails> {
    return this.http.get<IProductDetailsData>('https://raw.githubusercontent.com/mondeChrishiv/monde/master/product_details.json')
  }
  private transformProductDetails()
  {

  }

}
