import { Component, OnInit } from '@angular/core';
import {Iemployee} from './employee';
import {dataServices} from './data.services';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor(private _dataServices: dataServices) { }
listEmployees : Iemployee[];
  ngOnInit() {
this._dataServices.getEmployees().subscribe
(
  data=>
  {
this.listEmployees=data;
  }
  );
}
 
//   getEmployees(): Observable<Iemployee[]>{
// return this.http.get<Iemployee[]>(this._url);
// }
 }
