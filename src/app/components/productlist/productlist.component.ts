import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  products: object[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("../../../assets/products.json").subscribe(data => {
      this.products = data["arrayOfProducts"];
    });
  }

}
