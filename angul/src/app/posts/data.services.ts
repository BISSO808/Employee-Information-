import {Injectable} from "@angular/core"
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {employee} from '../forms/employees'
import {registerData} from'../register/registerData';
import {loginData} from '../login/loginData';
@Injectable()
export class dataServices{
    constructor(private httpclient: HttpClient){

    }
    getEmployees():Observable<any>{
return this.httpclient.get("http://localhost:3000/");
    }
post(empl:employee):Observable<any>{
return this.httpclient.post("http://localhost:3000/add/submit",empl);
}
postUser(registerD:registerData):Observable<any>{
    return this.httpclient.post("http://localhost:3000/register/submit",registerD);
}
postAdmin(loginD:loginData):Observable<any>{
return this.httpclient.post("http://localhost:3000/login/submit",loginD);
}
}