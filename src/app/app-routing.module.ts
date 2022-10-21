import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from "./calculator/calculator.component";
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
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

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'change', component: ChangePasswordFormComponent },
  { path: 'signUp', component: UsersComponent },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
