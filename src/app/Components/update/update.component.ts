import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    // Create the form group
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      department: ['', Validators.required],
      salary: ['', Validators.required],
      cellphone: ['', Validators.required],
      address: ['', Validators.required],
      suburb: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      postalCode: ['', Validators.required],
      startDate: ['', Validators.required],
      
    });
  }

  ngOnInit(): void { }

  clearInput() {
    // Clear the input field
    this.userForm.get('firstName')?.reset();
    this.userForm.get('lastName')?.reset();
    this.userForm.get('email')?.reset();
    this.userForm.get('department')?.reset();
    this.userForm.get('cellphone')?.reset();
    this.userForm.get('salary')?.reset();
    this.userForm.get('address')?.reset();
    this.userForm.get('suburb')?.reset();
    this.userForm.get('city')?.reset();
    this.userForm.get('country')?.reset();
    this.userForm.get('postalCode')?.reset();
    this.userForm.get('startDate')?.reset();
    console.log("cleared!")
  }

}
