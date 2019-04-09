import { Component, OnInit } from '@angular/core';
import { StreamService } from 'src/app/services/stream.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartCount: any;
  show : boolean = false;

  constructor(
    private streamService: StreamService
    ) {
      this.streamService.getCartCount().subscribe(res => this.cartCount=res);
    }

  ngOnInit() {
    if(this.cartCount>=0){
      this.show = true;
    }
  }

}
