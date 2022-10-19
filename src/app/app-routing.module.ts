import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { DirectionComponent } from './direction/direction.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/pages/profile/profile.component';
import { RegisterdirectionComponent } from './registerdirection/registerdirection.component';
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
  { path: 'wallet', component: WalletComponent },
  { path: 'direction', component: DirectionComponent },
  { path: 'direction/register', component: RegisterdirectionComponent },
  { path: 'generateorder', component: UrlorderComponent },
  { path: 'urlorder', component: UrlordermainComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
