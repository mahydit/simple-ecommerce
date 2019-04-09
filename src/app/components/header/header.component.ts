import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  totalItems : number = 0;
  show : boolean = false;

  constructor(private cartService : CartService) { }

  ngOnInit() {
    this.totalItems = this.cartService.calculateTotalItems();
    if(this.totalItems>0){
      this.show = true;
    }
  }

}
