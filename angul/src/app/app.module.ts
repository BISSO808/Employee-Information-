import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {materialModule} from './material.module';
import { HeaderComponent } from './header/header.component';
import {dataServices} from './posts/data.services';
import { FormsComponent} from './forms/forms.component';
import {RegisterComponent} from"./register/register.component";
import {HttpClientModule} from'@angular/common/http';
import { LoginComponent } from './login/login.component';
import { TrialComponent } from './trial/trial.component';
import {AppRoutingModule} from '../app/app/app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HeaderComponent,
    FormsComponent,
    RegisterComponent,
    LoginComponent,
    TrialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    materialModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
 // exports:[RouterModule],
  providers: [dataServices],
  bootstrap: [AppComponent]
})

export class AppModule { }
