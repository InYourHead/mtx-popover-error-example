import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MtxPopoverModule } from '@ng-matero/extensions/popover';
import {MatCardModule} from "@angular/material/card";
import { SimpleButtonComponent } from './simple-button/simple-button.component';
import { ExamplePageComponent } from './example-page/example-page.component';
import { ExamplePageButtonComponent } from './example-page-button/example-page-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleButtonComponent,
    ExamplePageComponent,
    ExamplePageButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MtxPopoverModule,
    MatCardModule,
    MtxPopoverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
