import { Router } from '@angular/router';
import { ApplicationService } from '../services/application.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-infor',
  templateUrl: './view-infor.component.html',
  styleUrls: ['./view-infor.component.css']
})
export class ViewInforComponent implements OnInit {

  private auth: any = null;
  private foosUrl = 'http://localhost:9445/auth/principal/';

  constructor(private _service: ApplicationService , private _router: Router) { }

  ngOnInit() {
    this._service.checkCredentials();
  }

  getPrincipal() {
    this._service.getResource(this.foosUrl)
    .subscribe(
      data => this.auth = data,
      e =>  {
        console.log( e);
        this._service.logout();
        this._router.navigate(['/']);
      });
  }
}
