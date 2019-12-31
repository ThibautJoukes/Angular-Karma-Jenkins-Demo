import { TestBed, async } from '@angular/core/testing';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from '../directives/highlight.directive';
import { ValidatePasswordDirective } from '../directives/validate-password.directive';

describe('ReactiveFormComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ReactiveFormComponent,
        HighlightDirective,
        ValidatePasswordDirective
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents();
  }));
});
