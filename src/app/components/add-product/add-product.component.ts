import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CrudService } from 'src/app/shared/crud.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  public productForm!: FormGroup;
  constructor(
    public crudApi: CrudService,
    public fb: FormBuilder,
    
  ) {}
  ngOnInit() {
    this.crudApi.GetStudentsList();
    this._productForm();
  }
  _productForm() {
    this.productForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: [''],
      email: ['',[Validators.required]],
      mobileNumber: [''],
    });
  }
  get firstName() {
    return this.productForm.get('firstName');
  }
  get lastName() {
    return this.productForm.get('lastName');
  }
  get email() {
    return this.productForm.get('email');
  }
  get mobileNumber() {
    return this.productForm.get('mobileNumber');
  }
  ResetForm() {
    this.productForm.reset();
  }
  submitProducttData() {
    this.crudApi.AddStudent(this.productForm.value);
  
    this.ResetForm();
  }
}