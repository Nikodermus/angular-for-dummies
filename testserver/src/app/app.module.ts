import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SeverCreatorComponent } from './sever-creator/sever-creator.component';
import { SeverElementComponent } from './sever-element/sever-element.component';

@NgModule({
  declarations: [
    AppComponent,
    SeverCreatorComponent,
    SeverElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
