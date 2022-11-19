import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatOptionModule } from '@angular/material/core';
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyWholesaleComponent } from './buy-wholesale/buy-wholesale.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { CouponsComponent } from './coupons-components/coupons/coupons.component';
import { EnterCouponComponent } from './coupons-components/enter-coupon/enter-coupon.component';
import { ValidateCouponComponent } from './coupons-components/validate-coupon/validate-coupon.component';
import { DirectionComponent } from './direction/direction.component';
import { DirectioninfoComponent } from './directioninfo/directioninfo.component';
import { DirectionregisterComponent } from './directionregister/directionregister.component';
import { DomesticShipmentComponent } from './domestic-shipment/domestic-shipment.component';
import { DomesticShipmentsInfoComponent } from './domestic-shipments-info/domestic-shipments-info.component';
import { FakeBackendProvider } from './fake-backend.interceptor';
import { FastyComponent } from './fasty/fasty.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/pages/profile/profile.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { UrlorderComponent } from './urlorder/urlorder.component';
import { UrlordermainComponent } from './urlordermain/urlordermain.component';
import { UsersComponent } from './users/pages/users/users.component';
import { WalletComponent } from './wallet/wallet.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { MatTabsModule } from '@angular/material/tabs';
import { CustomerOrderDetailComponent } from './customer-orders/customer-order-detail/customer-order-detail.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { ProductWholesaleDetailComponent } from './product-wholesale-detail/product-wholesale-detail.component';
import { ProductWholesalePaymentComponent } from './product-wholesale-payment/product-wholesale-payment.component';
import { ProductWholesaleComponent } from './product-wholesale/product-wholesale.component';
import { TravelerOrdersComponent } from './traveler-orders/traveler-orders.component';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ChangePasswordFormComponent,
    LoginComponent,
    LoginComponent,
    WelcomeComponent,
    UsersComponent,
    FastyComponent,
    CalculatorComponent,
    DomesticShipmentComponent,
    DomesticShipmentsInfoComponent,
    EnterCouponComponent,
    ValidateCouponComponent,
    CouponsComponent,
    WalletComponent,
    DirectionComponent,
    DirectionregisterComponent,
    DirectioninfoComponent,
    UrlorderComponent,
    UrlordermainComponent,
    BuyWholesaleComponent,
    ProductWholesaleComponent,
    ProductWholesaleDetailComponent,
    ProductWholesalePaymentComponent,
    CustomerOrdersComponent,
    SingleProductComponent,
    TravelerOrdersComponent,
    CustomerOrderDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatSelectModule,
    MatOptionModule,
    MatListModule,
    MatFormFieldModule,
    MatTableModule,
    MatProgressBarModule,
    AngularMaterialModule,
    MatTabsModule,
    MatAutocompleteModule,
    FlexLayoutModule,
    MatDividerModule
  ],
  providers: [FakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
