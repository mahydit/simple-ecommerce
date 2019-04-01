import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NavigationlinksComponent } from './components/navigationlinks/navigationlinks.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { SingleproductComponent } from './components/singleproduct/singleproduct.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LogoutComponent,
    NavigationlinksComponent,
    WishlistComponent,
    SingleproductComponent,
    LoginComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
