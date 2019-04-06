import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.scss']
})
export class SingleproductComponent implements OnInit {
  product: object;

  constructor(private route: ActivatedRoute,private http: HttpClient,private router : Router) {}

  ngOnInit() {
    this.http.get("../../../assets/products.json").subscribe(data => {
      let products = data["arrayOfProducts"];
      let found = false;
      products.forEach((product: object) => {
        if (product['id'] == this.route.snapshot.params.id) {
          found = true;
          this.product = product;
        }
      });
      if (!found) {
        this.router.navigate(["404"]);
      }
    });
  }

}
