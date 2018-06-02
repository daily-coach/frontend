import {Component, OnInit} from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {Dashboard} from '../../../../models/dashboard';
import {AppActions} from '../../../store/actions';
import {Router} from '@angular/router';
@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent {

  @select() readonly dashboard$: Observable<Dashboard>;

  sidemenu: {
    text: string,
    icon: string,
    route: string
  }[];

  public dashboard: Dashboard = {
    loading: false
  };

  constructor(private app: AppActions, private router: Router) {
    this.dashboard$.subscribe(dashboard => this.dashboard = dashboard);
    this.initSidemenu();
  }

  logout = () => {
    this.app.logout();
    this.router.navigate(['/login']);
  };

  initSidemenu = () =>
    this.sidemenu = [
      {
        text: 'tarefas',
        icon: 'event',
        route: '/tarefas'
      }
    ];

}
