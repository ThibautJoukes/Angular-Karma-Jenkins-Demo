import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, NgForm  } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  profileForm = new FormGroup({
    firstName: new FormControl('thibaut', [
      Validators.required
    ]),
    lastName: new FormControl(''),
    password: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    }),
    aliases: new FormArray([
      new FormControl('alias1'),
      new FormControl('alias2')
    ])
  });

  name: string;

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  onSubmitTemplate(form: NgForm) {
    // TODO: Use EventEmitter with form value
    console.warn(form.valid);
    alert()
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

}
