import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IUser, User} from "../../../services/users";

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.scss']
})
export class EntranceComponent {

  public users: User[] = [];
  public registrationForm: FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.minLength(8)])
    }
  )

  public onSubmit(){
    const data: IUser = {
      email: this.registrationForm.controls['email'].value,
      password: this.registrationForm.controls['password'].value
    }
    this.users.push(new User(data))
  }
}
