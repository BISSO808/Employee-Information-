import { Component, OnInit } from '@angular/core';
import {FormControl,Validators, FormGroup} from '@angular/forms';
import { dataServices } from '../posts/data.services';
import {Router} from '@angular/router'
import {loginData} from './loginData';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _dataServices: dataServices, private router: Router) { }

  ngOnInit() {
  }
  //logData = new log
  username = new FormControl('', [Validators.required]);
  loginForm= new FormGroup({
    username: new FormControl(''),
  password: new FormControl(''),
  })

}
