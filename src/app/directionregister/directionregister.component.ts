import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { Direction } from './direction';
import { DirectionregisterService } from './directionregister.service';


@Component({
  selector: 'app-directionregister',
  templateUrl: './directionregister.component.html',
  styleUrls: ['./directionregister.component.css']
})
export class DirectionregisterComponent implements OnInit {

  directionData: Direction;
  sumbitted: boolean = false;
  isEditMode: boolean = false;

  @ViewChild('directionForm', { static: false })
  directionForm!: NgForm;


  ngOnInit(): void {
  }

  registerForm: FormGroup = this.formBuilder.group({
    name: ['', { validators: [Validators.required], updatedOn: 'change' }],
    lastname: ['', { validators: [Validators.required], updatedOn: 'change' }],
    phone: ['', { validators: [Validators.required, Validators.pattern('^[0-9]*$')], updateOn: 'change' }],
    direction1: ['', { validators: [Validators.required], updatedOn: 'change' }],
    district: ['', { validators: [Validators.required], updatedOn: 'change' }],
    province: ['', { validators: [Validators.required], updatedOn: 'change' }],
    departament: ['', { validators: [Validators.required], updatedOn: 'change' }],
  })
  constructor(private directionregisterService: DirectionregisterService, private formBuilder: FormBuilder, private router: Router) {
    this.directionData = {} as Direction;
    //this.dataSource = new MatTableDataSource<any>();
  }
  editItem(element: Direction) {
    this.directionData = _.cloneDeep(element);
    this.isEditMode = true;
  }
  cancelEdit() {
    this.isEditMode = false;
    this.directionForm.resetForm();
  }


  get name() {
    return this.registerForm.get('name');
  }

  get lastname() {
    return this.registerForm.get('lastname');
  }
  get phone() {
    return this.registerForm.get('phone');
  }
  get direction1() {
    return this.registerForm.get('direction1');
  }
  get district() {
    return this.registerForm.get('district');
  }
  get province() {
    return this.registerForm.get('province');
  }
  get departament() {
    return this.registerForm.get('departament');
  }

  addDirection() {
    this.directionregisterService.create(this.directionForm.value).subscribe(response => {
      this.directionForm.reset();
      this.router.navigate(['profile']);
    });
  }
  onSubmit() {
    this.addDirection();
  }
}
