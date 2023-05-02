import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  currentRoute: any;
  constructor(private router: Router) {
    // this.currentRoute = router.url;
    // this.currentRoute = '/'

  }
}
