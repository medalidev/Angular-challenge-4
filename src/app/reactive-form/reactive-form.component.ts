import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { exactLength } from './customValid/numero.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {


  constructor(private fb: FormBuilder) { }

  userForm = this.fb.group({
    Name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.pattern("[a-z0-9]+\.[a-z0-9]+@[a-z0-9.-]+\.[a-z]{3}$")]],
    payementInformations: this.fb.group({
      typeCarte: ['', Validators.required],
      numero: ['', [Validators.required, exactLength]],
      dateExpiration: [''],
      code: [''],
    })
  })

  get name() {
    return this.userForm.get('Name');
  }
  get email() {
    return this.userForm.get('email');
  }
  get typeCarte() {
    return this.userForm.get('payementInformations')?.get('typeCarte');
  }
  get numero() {
    return this.userForm.get('payementInformations')?.get('numero');
  }
  get dateExpiration() {
    return this.userForm.get('payementInformations')?.get('dateExpiration');
  }
  get code() {
    return this.userForm.get('payementInformations')?.get('code');
  }
}
// userForm= new FormGroup ({
//   Name: new FormControl(''),
//   email: new FormControl(''),
//   payementInformations: new FormGroup({
//     typeCarte : new FormControl(''),
//     numero:  new FormControl(''),
//     dateExpiration : new FormControl(''),
//     code : new FormControl(''),
//   })
// })
