import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatOptionModule } from '@angular/material/core';
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
import { CalculatorComponent } from './calculator/calculator.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { ChatsComponent } from './chats/chats.component';
import { CouponsComponent } from './coupons-components/coupons/coupons.component';
import { EnterCouponComponent } from './coupons-components/enter-coupon/enter-coupon.component';
import { ValidateCouponComponent } from './coupons-components/validate-coupon/validate-coupon.component';
import { DomesticShipmentComponent } from './domestic-shipment/domestic-shipment.component';
import { DomesticShipmentsInfoComponent } from './domestic-shipments-info/domestic-shipments-info.component';
import { FakeBackendProvider } from './fake-backend.interceptor';
import { FastyComponent } from './fasty/fasty.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/pages/profile/profile.component';
import { UsersComponent } from './users/pages/users/users.component';
import { WelcomeComponent } from './welcome/welcome.component';
//import { FlexLayoutModule } from "@angular/flex-layout";
import { DirectionComponent } from './direction/direction.component';
import { DirectioninfoComponent } from './directioninfo/directioninfo.component';
import { DirectionregisterComponent } from './directionregister/directionregister.component';
import { UrlorderComponent } from './urlorder/urlorder.component';
import { UrlordermainComponent } from './urlordermain/urlordermain.component';
import { WalletComponent } from './wallet/wallet.component';


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
    ChatsComponent
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
    MatAutocompleteModule
  ],
  providers: [FakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }