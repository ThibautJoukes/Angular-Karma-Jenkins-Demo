import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ValidatePasswordDirective } from './directives/validate-password.directive';
import { ViewChildrenComponent } from './view-children/view-children.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    HighlightDirective,
    ValidatePasswordDirective,
    ViewChildrenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
