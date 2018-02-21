import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpUserEvent } from '@angular/common/http/src/response';
import { Router } from '@angular/router';
import { User } from '../shared/models/user';


@Injectable()
export class AuthService {

  public isAuthenticated: boolean;

  constructor(private http: HttpClient, private router: Router) {
  	this.isAuthenticated = !!window.localStorage.getItem('loginToken');
  }

  login(email: string, password: string)
  {
  	return new Observable((o: Observer<any>) => {
    	this.http.post('http://localhost:8000/api/login', {
  			'email': email,
  			'password': password
  	  	})
	        .subscribe(
	          (data: {token: string}) => {
	          	window.localStorage.setItem('loginToken', data.token);
	          	this.isAuthenticated = true;

	            o.next(data.token);
	            return o.complete();
	          },
	          (err) => {
	          	// samo proslediti
	          	return o.error(err);
	          }
	        );
    });
  }

  public getRequestHeaders()
  {
  	return new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('loginToken'));
  }

  public logout()
  {
  	window.localStorage.removeItem('loginToken');
  	this.isAuthenticated = false;	
	}
	public register(user: User) {
		return new Observable((o: Observer<any>) => {
				this.http.post('http://localhost:8000/api/register', {
						'firstName': user.firstName,
						'lastName': user.lastName,
						'email': user.email,
						'password': user.password,
						'password_confirmation': user.confirmPassword,
				}).subscribe(() => {
						this.router.navigateByUrl('/login');
				}, (err) => {
						// samo proslediti
						return o.error(err);
				});
		});
}


}
