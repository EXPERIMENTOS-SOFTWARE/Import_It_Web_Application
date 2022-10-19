import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { Urlorder } from './urlorder';
import { UrlorderService } from './urlorder.service';

@Component({
  selector: 'app-urlorder',
  templateUrl: './urlorder.component.html',
  styleUrls: ['./urlorder.component.css']
})
export class UrlorderComponent implements OnInit {

  urlorderData: Urlorder;
  sumbitted: boolean = false;
  isEditMode: boolean = false;

  @ViewChild('urlorderForm', { static: false })
  urlorderForm!: NgForm;

  registerForm: FormGroup = this.formBuilder.group({
    url: ['', { validators: [Validators.required], updateOn: 'change' }],
    name: ['', { validators: [Validators.required], updatedOn: 'change' }],
    tittle: ['', { validators: [Validators.required], updatedOn: 'change' }],
    weight: ['', { validators: [Validators.required, Validators.minLength(1), Validators.maxLength(5)], updateOn: 'change' }],
    amount: ['', { validators: [Validators.required, Validators.minLength(1), Validators.maxLength(2)], updateOn: 'change' }],
    price: ['', { validators: [Validators.required], updatedOn: 'change' }],
    status: ['', { validators: [Validators.required], updatedOn: 'change' }],
    comision: ['', { validators: [Validators.required], updatedOn: 'change' }]

  });

  constructor(private urlorderService: UrlorderService, private formBuilder: FormBuilder, private router: Router) {
    this.urlorderData = {} as Urlorder;
  }

  ngOnInit(): void {
  }

  editItem(element: Urlorder) {
    this.urlorderData = _.cloneDeep(element);
    this.isEditMode = true;
  }
  cancelEdit() {
    this.isEditMode = false;
    this.urlorderForm.resetForm();
  }
  get url() {
    return this.registerForm.get('url');
  }
  get name() {
    return this.registerForm.get('name');
  }
  get tittle() {
    return this.registerForm.get('tittle');
  }
  get weight() {
    return this.registerForm.get('weight');
  }
  get amount() {
    return this.registerForm.get('amount');
  }
  get price() {
    return this.registerForm.get('price');
  }
  get status() {
    return this.registerForm.get('status');
  }
  get comision() {
    return this.registerForm.get('comision');
  }
  addUrlorder() {
    this.urlorderService.create(this.urlorderForm.value).subscribe(response => {
      this.urlorderForm.reset();
      this.router.navigate(['urlorder']);
    });
  }
  onSubmit() {
    this.addUrlorder();
  }
}
