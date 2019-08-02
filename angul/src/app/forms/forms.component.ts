import { Component, OnInit } from '@angular/core';
import {employee} from './employees'
import{dataServices} from'../posts/data.services';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { Router } from "@angular/router";
import { registerData } from '../register/registerData';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private _dataServices:dataServices, private router : Router) { }
  emplpost : employee;
  ngOnInit() {
  
  }
  empdata = new employee();
  registerForm = new FormGroup({
  firstname: new FormControl('',Validators.required),
  lastname: new FormControl(''),
  Address: new FormControl(''),
  City:new FormControl(''),
  State: new FormControl(''),
  Zip: new FormControl(''),
  homephone: new FormControl(''),
 Cellphone: new FormControl(''),
 Email: new FormControl(''),
});

  onSubmit(){
    this.empdata.firstname=this.registerForm.value.firstname;
    this.empdata.lastname=this.registerForm.value.lastname;
    this.empdata.Address=this.registerForm.value.Address;
    this.empdata.State=this.registerForm.value.State;
    this.empdata.City= this.registerForm.value.City,
    this.empdata.Zip=this.registerForm.value.Zip;
    this.empdata.homephone=this.registerForm.value.homephone;
    this.empdata.Cellphone=this.registerForm.value.Cellphone;
    this.empdata.Email=this.registerForm.value.Email;
    this._dataServices.post(this.empdata).subscribe
  (
    data=>
    {this.emplpost=data;}
    );
    this.router.navigate(['/employeelist']);
  }

}
  