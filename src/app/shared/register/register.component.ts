import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../../auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user: User = new User();
  public errors: any[] = [];

  constructor(
      private router: Router,
      private auth: AuthService
  ) { }

  ngOnInit() {
  }

  public register() {

      this.auth.register(this.user).
          subscribe((user) => {
              this.router.navigateByUrl('/');

          }, (e) => {
              let errorObjects = e.error.errors;
              let arrayOfErrors = Object.keys(errorObjects).map(key => {
                  return errorObjects[key][0];
              },
                  (err: HttpErrorResponse) => {
                      alert(`${err.error.error}`);
                  });
              this.errors = arrayOfErrors;
          });

      this.auth.login(this.user.email, this.user.password)
          .subscribe((token) => {
              this.router.navigateByUrl('/');
          });
  }


}
