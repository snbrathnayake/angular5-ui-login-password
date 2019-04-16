import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/application.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public isLoggedIn = false;

  constructor(private _service: ApplicationService, private _router: Router) { }

  ngOnInit() {
    if (this._service.getAccessToken() !== null) {
      this.isLoggedIn = true;
    } 
  }

  logout() {
    this._service.logout();
  }

  view() {
    this._router.navigate(['/view']);
  }

}
