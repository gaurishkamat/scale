import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VanillaFormComponent } from './vanilla-form/vanilla-form.component';
import { ScaleFormComponent } from './scale-form/scale-form.component';

@NgModule({
  declarations: [
    AppComponent,
    VanillaFormComponent,
    ScaleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
