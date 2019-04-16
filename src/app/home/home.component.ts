import { Router } from '@angular/router';
import { ApplicationService } from '../services/application.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private app: ApplicationService , private _router: Router) { }

  ngOnInit() {
    this.app.checkCredentials();
  }

  logout() {
    this.app.logout();
  }

  view() {
    this._router.navigate(['/view']);
  }
}
