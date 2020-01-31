import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.maxLength(256)
      ]),

      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),

      matchingPassword: new FormGroup({
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(6)
        ]),
        confirm_password: new FormControl(null, [
          Validators.required
        ])
      }, this.passwordAreEqual()
      )

    })
  }
  submit(){
    console.log(this.form.get('email'));
    if(this.form.invalid) return;


  }

  passwordAreEqual(): ValidatorFn{
    return (group: FormGroup): { [key: string]: any } => {
    let val: string;
    let valid = true;

    for (const name in group.controls) {
      if (val === undefined) {
        val = group.controls[name].value
      } else {
        if (val !== group.controls[name].value){
          valid = false;
          break;
        }
      }
    };

    return valid ? null : {areEqual: true}
    }
  }

  debug(){
    console.log(this.form.get('matchingPassword').errors.areEqual);
  }


}
