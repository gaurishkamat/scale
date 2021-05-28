import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VanillaFormComponent } from './vanilla-form/vanilla-form.component';
import { ScaleFormComponent } from './scale-form/scale-form.component';

const routes: Routes = [
  { path: 'vanilla-form', component: VanillaFormComponent },
  { path: 'scale-form', component: ScaleFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
