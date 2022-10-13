import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../model/user';
import { UsersService } from '../../services/users.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userData: User;
  submitted: boolean = false;
  isEditMode: boolean = false;

  @ViewChild('userForm', {static: false})
  userForm!: NgForm;


  registerForm: FormGroup = this.formBuilder.group({
    name: ['', {validators: [Validators.required], updatedOn: 'change'}],
    phone: ['', {validators: [Validators.required, Validators.pattern('^[0-9]*$')], updateOn: 'change'}],
    dni: ['', {validators: [Validators.required, Validators.minLength(8), Validators.maxLength(8)], updateOn: 'change'}],
    month:['', {validators: [Validators.required, Validators.pattern('^[0-9]*$')], updateOn: 'change'}],
    day:['', {validators: [Validators.required, Validators.pattern('^[0-9]*$')], updateOn: 'change'}],
    year: ['', {validators: [Validators.required, Validators.pattern('^[0-9]*$')], updateOn: 'change'}],
    email: ['', {validators: [Validators.required, Validators.email], updatedOn: 'change'}],
    password: ['', {validators: [Validators.required, Validators.minLength(5)], updatedOn: 'change'}],
    //birthday: ['', {validators: [Validators.required], updatedOn: 'change'}],
    genre: ['', {updatedOn: 'change'}],
    address: ['', {validators: [Validators.required], updateOn: 'change'}]
  });

  constructor(private usersService: UsersService, private formBuilder: FormBuilder, private router: Router) { 
    this.userData = {} as User;
  }

  ngOnInit(): void {
  }

  editItem(element: User){
    this.userData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit(){
    this.isEditMode = false;
    this.userForm.resetForm();
  }

  get name(){
    return this.registerForm.get('name');
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

  get day(){
    return this.registerForm.get('day');
  }
  get month(){
    return this.registerForm.get('month');
  }

  get year(){
    return this.registerForm.get('year');
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

  addUser(){
    
    this.usersService.create(this.userForm.value).subscribe(response=>{
      this.userForm.reset();
      this.router.navigate(['login']);
    });
  }

  onSubmit(){
    this.addUser();
  }
  

}
