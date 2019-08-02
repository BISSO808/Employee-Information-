import { Component, OnInit } from '@angular/core';
import {registerData} from './registerData';
import { dataServices } from '../posts/data.services';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerDta: registerData;

  constructor(private _dataServices: dataServices, private router : Router) { }

  ngOnInit() {
    
  }
hide=true;
nhide=true;
username = new FormControl('', [Validators.required]);
obj= new registerData();
onSubmit(){
  this._dataServices.postUser(this.obj).subscribe
  (
    data=>
    {this.registerDta=data;}
    );
    this.router.navigate(['/employeelist']);
  }
  getErrorMessage() {
    return this.username.hasError('required') ? 'You must enter a value' :
            '';
}
}
