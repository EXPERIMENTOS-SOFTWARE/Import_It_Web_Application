import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyWholesaleComponent } from './buy-wholesale/buy-wholesale.component';
import { ProductWholesaleDetailComponent } from './product-wholesale-detail/product-wholesale-detail.component';
import { ProductWholesalePaymentComponent } from './product-wholesale-payment/product-wholesale-payment.component';
import { ProductWholesaleComponent } from './product-wholesale/product-wholesale.component';
/*import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/pages/profile/profile.component';
import { UsersComponent } from './users/pages/users/users.component';
import { WelcomeComponent } from './welcome/welcome.component';*/

const routes: Routes = [
  /*{ path: 'welcome', component: WelcomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'change', component: ChangePasswordFormComponent },
  { path: 'signUp', component: UsersComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' }*/
  {
    path: 'buy-wholesale',
    component: BuyWholesaleComponent,
    children: [
      { path: 'product-wholesale', component: ProductWholesaleComponent },
      { path: 'product-wholesale-detail/:id', component: ProductWholesaleDetailComponent },
      { path: 'product-wholesale-payment/:id', component: ProductWholesalePaymentComponent },
      { path: 'product-wholesale-type/:type', component: ProductWholesaleComponent },
      { path: '', component: ProductWholesaleComponent },
    ]
  },
  { path: '', redirectTo: 'buy-wholesale', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
