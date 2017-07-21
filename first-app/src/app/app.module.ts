import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DatabindingComponent } from './databinding/databinding.component';

import { MycomponentComponent } from './databinding/mycomponent.component';

import { EventBindingComponent } from './databinding/event-binding.component';
import { TwowayBindingComponent } from './databinding/twoway-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent, MycomponentComponent,
    EventBindingComponent,
    TwowayBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
