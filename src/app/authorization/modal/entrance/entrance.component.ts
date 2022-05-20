import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../../shared/interfaces/interfaces';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { AuthorizationLayoutComponent } from '../../authorization-layout/authorization-layout.component';

@Component({
    selector: 'app-entrance',
    templateUrl: './entrance.component.html',
    styleUrls: ['./entrance.component.scss']
})
export class EntranceComponent  {

    public submitted: boolean = false;
    public entranceForm: FormGroup;

    constructor(
      public auth: AuthenticationService,
      private _router: Router,
      public authLayout:AuthorizationLayoutComponent) {

        this.entranceForm = new FormGroup({
            email: new FormControl(null,[Validators.required,Validators.email]),
            password: new FormControl(null,[Validators.required,Validators.minLength(6)])
        });
    }

    public onSubmit(): void {

        this.submitted = true;

        const user: IUser = {
            email: this.entranceForm.controls['email'].value,
            password: this.entranceForm.controls['password'].value
        };

        this.auth.login(user).subscribe(() => {
            this.entranceForm.reset();
            this._router.navigate(['/']);
            this.submitted = false;
        }, () => {
            this.submitted = false;
        });
    }

    public closeModal():void{
        this.authLayout.removeDynamicComponent();
    }
}
