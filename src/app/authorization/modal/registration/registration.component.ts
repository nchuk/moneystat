import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IUser} from "../../../shared/interfaces/interfaces";
import {AuthorizationLayoutComponent} from "../../authorization-layout/authorization-layout.component";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent  {

  public submitted: boolean = false;

  constructor(
    public auth: AuthenticationService,
    private _router: Router,
    public authLayout:AuthorizationLayoutComponent) {

  }

  public registrationForm: FormGroup = new FormGroup({
      email: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required,Validators.minLength(6)])
    }
  )

  public onSubmit(): void {

    this.submitted = true;

    const user: IUser = {
      email: this.registrationForm.controls['email'].value,
      password: this.registrationForm.controls['password'].value
    };

    this.auth.registration(user).subscribe(() => {
      this.registrationForm.reset();
      this._router.navigate(['/']);
      this.submitted = false;
    }, () => {
      this.submitted = false;
    });
  }

  closeModal(){
    this.authLayout.removeDynamicComponent();
  }


}
