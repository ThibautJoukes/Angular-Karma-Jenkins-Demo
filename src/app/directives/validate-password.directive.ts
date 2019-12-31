import { Directive, ElementRef, forwardRef } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appValidatePassword]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => ValidatePasswordDirective), multi: true }
]
})
export class ValidatePasswordDirective implements Validator {

  constructor(public el: ElementRef){
    console.log('constructor passvalidation');
  }

  validate(control: AbstractControl): ValidationErrors {    
    var value = control.value;

    console.log(value);

    if(value == "" || value == undefined) return {empty: false};
    if(value.length < 9) return {short: false};
    
    return {complete: true};
  }
}
