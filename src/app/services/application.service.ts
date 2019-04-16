import { RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ApplicationService {

  constructor(private _http: HttpClient, private _router: Router) { }


  checkCredentials() {
    if (!Cookie.check('access_token')) {
      this._router.navigate(['/login']);
    }
  }

  getAccessToken() {
    return Cookie.get('access_token') || null;
  }

  logout() {
    Cookie.delete('access_token');
    this._router.navigate(['/login']);
  }

  obtainAccessToken(login) {

    console.log(login);

    const params = new URLSearchParams();
    params.append('username', login.username);
    params.append('password', login.password);
    params.append('grant_type', 'password');
    params.append('client_id', 'mobile');

    const headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Basic ' + btoa('mobile:pin')
    });

    this._http.post('http://localhost:9445/auth/oauth/token',
      params.toString(), { headers: headers })
      .subscribe(
      data => this.saveToken(data),
      err => alert('Invalid Credentials'));

  }

  saveToken(token): any {
    console.log(token);
    const expireDate = new Date().getTime() + (1000 * token.expires_in);
    Cookie.set('access_token', token.access_token, expireDate);
    this._router.navigate(['/']);
  }

  getResource(url: string) {
    const headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Bearer ' + this.getAccessToken()
    });

    return this._http.get(url, { headers: headers })
    .catch((error: any) => Observable.throw(error || 'Server error'));
  }


}
