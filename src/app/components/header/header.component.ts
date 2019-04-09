import { Component, OnInit } from '@angular/core';
import { StreamService } from 'src/app/services/stream.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartCount: any;
  show : boolean = false;
  authenticated: any;

  constructor(private streamService: StreamService, private auth: AuthService){
    this.streamService.getCartCount().subscribe(res => this.cartCount = res);
    this.streamService.getAuthenticated().subscribe(res => this.authenticated = res);
    this.authenticated = (this.authenticated =="true");
  }

  ngOnInit() {
    if(this.cartCount>=0){
      this.show = true;
    }
  }

}
