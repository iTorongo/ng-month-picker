import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { NgMonthPickerModule } from 'ng-month-picker';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgMonthPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
