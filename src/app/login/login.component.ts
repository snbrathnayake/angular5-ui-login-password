import { ApplicationService } from '../services/application.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginData = { username: '', password: '' };
  

  constructor(private _service: ApplicationService) { }

  ngOnInit() {
  }

  login() {
    this._service.obtainAccessToken(this.loginData);
  }

}
