import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsComponent} from "../forms/forms.component";
import {PostsComponent} from '../posts/posts.component';
import {RegisterComponent} from '../register/register.component';
import {LoginComponent} from '../login/login.component';

const routes: Routes = [
  
    {path:'form', component: FormsComponent },
    {path:'register', component: RegisterComponent},
    {path:'employeelist', component: PostsComponent},
    {path:'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
