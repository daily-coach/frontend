import {Injectable} from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';
import {SessaoEnum} from '../../utilities/sessao';
import {Usuario} from '../../models/usuario';
import {select} from '@angular-redux/store';
import {UsuarioActions} from '../usuario/store/actions';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UsuarioGlobalServices {

  @select() usuario$: Observable<Usuario>;

  constructor(private localStorage: LocalStorageService, private actions: UsuarioActions) { }

  save(usuario: Usuario) {
    return Promise
      .resolve(this.localStorage.set(SessaoEnum.USER as string, usuario))
      .then(_saved => _saved);
  }

  saveFromStorage() {
    const usuario: Usuario = this.localStorage.get(SessaoEnum.USER as string);
    this.actions.addUser(usuario);
  }

}
