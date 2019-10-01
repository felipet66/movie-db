import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [ CardComponent, LoaderComponent ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    CardComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
