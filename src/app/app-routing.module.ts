import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from "./calculator/calculator.component";
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { ChatsComponent } from './chats/chats.component';
import { CouponsComponent } from './coupons-components/coupons/coupons.component';
import { EnterCouponComponent } from './coupons-components/enter-coupon/enter-coupon.component';
import { ValidateCouponComponent } from './coupons-components/validate-coupon/validate-coupon.component';
import { DirectionComponent } from './direction/direction.component';
import { DirectioninfoComponent } from './directioninfo/directioninfo.component';
import { DirectionregisterComponent } from './directionregister/directionregister.component';
import { DomesticShipmentComponent } from './domestic-shipment/domestic-shipment.component';
import { DomesticShipmentsInfoComponent } from './domestic-shipments-info/domestic-shipments-info.component';
import { FastyComponent } from "./fasty/fasty.component";
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/pages/profile/profile.component';
import { UrlorderComponent } from './urlorder/urlorder.component';
import { UrlordermainComponent } from './urlordermain/urlordermain.component';
import { UsersComponent } from './users/pages/users/users.component';
import { WalletComponent } from './wallet/wallet.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BuyWholesaleComponent } from './buy-wholesale/buy-wholesale.component';
import { ProductWholesaleDetailComponent } from './product-wholesale-detail/product-wholesale-detail.component';
import { ProductWholesalePaymentComponent } from './product-wholesale-payment/product-wholesale-payment.component';
import { ProductWholesaleComponent } from './product-wholesale/product-wholesale.component';


const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'change', component: ChangePasswordFormComponent },
  { path: 'signUp', component: UsersComponent },
  { path: 'chats', component: ChatsComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'fasty', component: FastyComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'domestic-shipment', component: DomesticShipmentComponent },
  { path: 'domestic-shipments-info/:id', component: DomesticShipmentsInfoComponent },
  { path: 'coupons', component: CouponsComponent },
  { path: 'enter-coupon', component: EnterCouponComponent },
  { path: 'validate-coupon', component: ValidateCouponComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'direction', component: DirectionComponent },
  { path: 'directionregister', component: DirectionregisterComponent },
  { path: 'directioninfo/:id', component: DirectioninfoComponent },
  { path: 'generateorder', component: UrlorderComponent },
  { path: 'urlorder', component: UrlordermainComponent },
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
  { path: 'chats', component: ChatsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
