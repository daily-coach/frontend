import {Component} from '@angular/core';
import {Login} from '../../../../models/login';
import {UsuarioActions} from '../../store/actions';
import {select} from '@angular-redux/store';
import {Usuario} from '../../../../models/usuario';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login: Login;
  @select() login$: Observable<Login>;

  constructor(private actions: UsuarioActions) {
    this.login = {
      email: '',
      senha: ''
    };
    this.login$.subscribe(login => this.login = login);
  }

  auth() {
    this.actions.login(this.login);
  }

}
