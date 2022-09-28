import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../model/user';
import { UsersService } from '../../services/users.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userData: User;
  submitted: boolean = false;
  dataSource: MatTableDataSource<any>;
  isEditMode: boolean = false;

  @ViewChild('studentForm', {static: false})
  studentForm!: NgForm 


  registerForm: FormGroup = this.formBuilder.group({
    name: ['', {validators: [Validators.required], updatedOn: 'change'}],
    phone: ['', {validators: [Validators.required, Validators.pattern('^[0-9]*$')], updateOn: 'change'}],
    dni: ['', {validators: [Validators.required, Validators.minLength(8), Validators.maxLength(8)], updateOn: 'change'}],
    month:['', {validators: [Validators.required], updateOn: 'change'}],
    day:['', {validators: [Validators.required], updateOn: 'change'}],
    year: ['', {validators: [Validators.required], updateOn: 'change'}],
    //role: ['jobSeeker', {validators: [Validators.required], updateOn: 'change'}],
    email: ['', {validators: [Validators.required, Validators.email], updatedOn: 'change'}],
    password: ['', {validators: [Validators.required, Validators.minLength(5)], updatedOn: 'change'}],
    //birthday: ['', {validators: [Validators.required], updatedOn: 'change'}],
    genre: ['', {updatedOn: 'change'}],
    address: ['', {validators: [Validators.required], updateOn: 'change'}]
  });

  constructor(private usersService: UsersService, private formBuilder: FormBuilder) { 
    this.userData = {} as User;
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents(){
    this.usersService.getAll().subscribe((response: any)=>{
      this.dataSource.data = response;
    });
  }

  editItem(element: User){
    this.userData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit(){
    this.isEditMode = false;
    this.studentForm.resetForm();
  }

  deleteItem(id: number){
    this.usersService.delete(id).subscribe(()=>{
      this.dataSource.data = this.dataSource.data.filter((o:User)=>{
        return o.id !== id? o : false;
      });
    });
    console.log(this.dataSource.data);
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

  addStudent(){
    this.userData.id = 0;
    this.usersService.create(this.userData).subscribe((response: any)=>{
      this.dataSource.data.push({ ...response });
      this.dataSource.data = this.dataSource.data.map((o:any)=>{
        return o;
      });
    });
  }

  submitForm(){ 
    console.log(this.registerForm.valid);
    this.submitted = true;
  }

  updateStudent(){
    this.usersService.update(this.userData.id, this.userData).subscribe((response:any)=>{
      this.dataSource.data=this.dataSource.data.map((o: User) =>{
        if(o.id === response.id){
          o = response;
        }
          return o;
      });
    });
  }

  onSubmit(){
    if(this.studentForm.form.valid){
      console.log('valid');
      if(this.isEditMode){
        console.log('about to update');
        this.updateStudent();
      } else{
        console.log('about to add');
        this.addStudent();
      }
      this.cancelEdit();
    } else{
      console.log('Invalid data');
    }
  }
}
