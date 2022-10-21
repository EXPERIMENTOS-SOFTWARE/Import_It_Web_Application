import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from "./calculator/calculator.component";
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { FastyComponent } from "./fasty/fasty.component";
import { CouponsComponent } from './coupons-components/coupons/coupons.component';
import { EnterCouponComponent } from './coupons-components/enter-coupon/enter-coupon.component';
import { ValidateCouponComponent } from './coupons-components/validate-coupon/validate-coupon.component';
import { DomesticShipmentComponent } from './domestic-shipment/domestic-shipment.component';
import { DomesticShipmentsInfoComponent } from './domestic-shipments-info/domestic-shipments-info.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/pages/profile/profile.component';
import { UsersComponent } from './users/pages/users/users.component';
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
  { path: 'validate-coupon', component: ValidateCouponComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
