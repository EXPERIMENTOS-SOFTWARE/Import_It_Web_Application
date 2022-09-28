import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: 'full',
  },
  {
    path: "welcome",
    component: WelcomeComponent,
  },
  {
    path: "",
    redirectTo: "welcome",
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: "login",
  },
  {
    path: '**',
    redirectTo: "welcome",
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
