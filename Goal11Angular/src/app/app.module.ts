import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sgd111Component } from './sgd111/sgd111.component';
import { Sgd115Component } from './sgd115/sgd115.component';
import { Sgd116Component } from './sgd116/sgd116.component';
import { Sgd11bComponent } from './sgd11b/sgd11b.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    Sgd111Component,
    Sgd115Component,
    Sgd116Component,
    Sgd11bComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
