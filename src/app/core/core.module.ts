import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarComponent } from '../core/navbar/navbar.component';
import { HomeComponent } from '../pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    BrowserModule,
    NavbarComponent,
    HomeComponent,
    HttpClientModule
  ]
})
export class CoreModule { }
