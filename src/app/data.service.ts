import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProductDetails } from './iproduct-details';

interface IProductDetailsData {
  productId: number,
  weight: number,
  title: string,
  price: number     
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  getProductDetails():Observable<IProductDetails> {
    return this.http.get<IProductDetailsData>('https://raw.githubusercontent.com/mondeChrishiv/monde/master/product_details.json').pipe(map(data => this.transformProductDetails(data)))
  }
  private transformProductDetails(data: IProductDetailsData):IProductDetails {
      return {
        weight: this.gramToOz(data.weight*0.035),
        title: data.title,
        price: this.inrToUsd(data.price/72)
      }
    }
    private gramToOz(data: number):string{
      return data+"oz";
    }
    private inrToUsd(data: number):string{
      return "$"+data;
    }
  }
