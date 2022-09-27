import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
 
  submitted: boolean = false;

  registerForm: FormGroup = this.formBuilder.group({
    fullName: ['', {validators: [Validators.required], updatedOn: 'change'}],
    phone: ['', {validators: [Validators.required, Validators.pattern('^[0-9]*$')], updateOn: 'change'}],
    dni: ['', {validators: [Validators.required, Validators.minLength(8), Validators.maxLength(8)], updateOn: 'change'}],
    role: ['jobSeeker', {validators: [Validators.required], updateOn: 'change'}],
    email: ['', {validators: [Validators.required, Validators.email], updatedOn: 'change'}],
    password: ['', {validators: [Validators.required, Validators.minLength(5)], updatedOn: 'change'}],
    birthday: ['', {validators: [Validators.required], updatedOn: 'change'}],
    genre: ['', {updatedOn: 'change'}],
    address: ['', {validators: [Validators.required], updateOn: 'change'}]
  });

 

  constructor(private formBuilder: FormBuilder) { }

  

  ngOnInit(): void {
    //this.setPhoneValidation();
  }

  
  
  //Properties
  get fullName(){
    return this.registerForm.get('fullName');
  }
  
  get phone(){
    return this.registerForm.get('phone');
  }

  get dni(){
    return this.registerForm.get('dni');
  }

  get role(){
    return this.registerForm.get('role');
  }

  get email(){
    return this.registerForm.get('email');
  }

  get password(){
    return this.registerForm.get('password');
  }

  get birthday(){
    return this.registerForm.get('birthday');
  }

  get genre(){
    return this.registerForm.get('genre');
  }

  get address(){
    return this.registerForm.get('address');
  }
  //Dynamic validation setup

  /*setPhoneValidation(){
    const phoneControl = this.registerForm.get('phone');
    //Default validation
    //phoneControl?.setValidators([Validators.pattern('^[0-9]*$'), Validators.required]);

    //validation based on role
    this.role?.valueChanges.subscribe((role) => {
      if(role =='jobSeeker'){
        phoneControl?.setValidators([Validators.pattern('^[0-9]*$'), Validators.required]);
      }
      else{ 
        phoneControl?.setValidators([Validators.pattern('^[0-9]*$')]);
      } 
        phoneControl?.updateValueAndValidity();
      
    })
  }*/

  submitForm(){ 
    console.log(this.registerForm.valid);
    this.submitted = true;
  }

}
