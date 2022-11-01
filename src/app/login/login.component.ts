import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../users/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private usersService: UsersService, private router: Router, private authService: AuthService, private appComponent: AppComponent) {
  }

  ngOnInit(): void {
    this.setDNIValidation();
  }

  loginImgSource: string = "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80";

  submitted: boolean = false;

  loginForm: FormGroup = this.formBuilder.group({
    // here, we specified the name of all the fields that our form has
    // in the html file, we define the name of the field in the formControlName attribute
    dni: ['', { validators: [Validators.required], updateOn: 'change' }],
    password: ['', { validators: [Validators.required, Validators.minLength(8)], updateOn: 'change' }]
  })
  /*grabar_localstorage() {
    localStorage.setItem('dni', this.loginForm.value.dni);
  }*/
  get dni() {
    return this.loginForm.get('dni');
  }

  get password() {
    return this.loginForm.get('password');
  }
  reset_login() {
    localStorage.clear();
  }
  grabar_localstorage() {
    localStorage.setItem('dni', this.loginForm.value.dni);
    localStorage.setItem('isLoged', 'true');
    this.appComponent._isLoged$.next(true);
  }

  setDNIValidation() {
    const dniControl = this.loginForm.get('dni');

    // validates that the DNI input field only has numbers
    dniControl?.setValidators([Validators.pattern('^[0-9]*$'), Validators.required]);
  }

  submitForm() {
    //this.submitted = true;

    this.usersService.getAll().subscribe(response => {
      const user = response.find((a: any) => {
        return a.dni === this.loginForm.value.dni && a.password === this.loginForm.value.password;
      });
      if (user) {
        alert("Login Success!!");
        this.grabar_localstorage();
        //this.loginForm.reset();
        //this.router.navigate(['profile']);
        this.authService
          .login(this.loginForm.get('dni')?.value ?? '', this.loginForm.get('pasword')?.value)
          .subscribe((response) => {
            this.router.navigate(['profile']);
          });
        this.authService.currentID = user.id;
        this.authService.currentName = user.name;
      } else {
        alert("user not found");
      }
    });


  }

}
