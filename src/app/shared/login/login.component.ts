import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  login(email, password) {
    this.authService.login(email, password)
        .subscribe(
        () => {
            this.router.navigateByUrl('/');
        },
        (err: HttpErrorResponse) => {
            alert(`${err.error.error}`);
        }
        );
  }


}
