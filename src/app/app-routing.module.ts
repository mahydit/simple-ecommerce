import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { SingleproductComponent } from './components/singleproduct/singleproduct.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent},
  { path: 'wishlist', component: WishlistComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'products', component: ProductlistComponent},
  { path: '', component: ProductlistComponent},
  { path: 'product/:id', component: SingleproductComponent},
  { path: '404', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
