import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AppActions} from './store/actions';
import {Injectable} from '@angular/core';
import {UsuarioGlobalServices} from './services/usuario.global.services';
import {Usuario} from '../models/usuario';

@Injectable()
export class AppAuth implements CanActivate {

  private usuario: Usuario;

  constructor(private usuarioGlobal: UsuarioGlobalServices,
              private router: Router) {
    this.usuarioGlobal.usuario$.subscribe(usuario => this.usuario = usuario);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.usuario.id) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
