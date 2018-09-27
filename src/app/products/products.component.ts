import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IProductDetails } from '../iproduct-details';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: IProductDetails

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getProductDetails().subscribe(data => this.products = data);
  }

}
