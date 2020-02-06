import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  form: FormGroup;

  constructor( private userService: UserService) { }

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

      passwordGroup: new FormGroup({
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
    if(this.form.invalid) return;
    let { name, email } = this.form.value;
    let password = this.form.value.passwordGroup.password;
    let newUser: User = {
      name: name,
      email: email,
      password: password
    }

    this.userService.registrationUser(newUser).subscribe((res)=>console.log(res));

  }

  passwordAreEqual(): ValidatorFn{
      return (group: FormGroup): { [key: string]: any } => {
        if(group.get('password').value === group.get('confirm_password').value) {
          return null
        }
      return {areEqual: true}
    }
  }



}
