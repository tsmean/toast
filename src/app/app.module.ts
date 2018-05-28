import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NotifyModule } from '@tsmean/toast';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule} from '@angular/material';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NotifyModule.forRoot(),
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
