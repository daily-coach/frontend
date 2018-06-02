import {ApiService} from '../../../services-utils/api.service';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {UsuarioGlobalServices} from '../../services/usuario.global.services';
import {Usuario} from '../../../models/usuario';
import {mapToResponse} from '../../../services-utils/api.utils';
import {Login} from '../../../models/login';
import {environment} from '../../../environments/environment';

@Injectable()
export class UsuarioServices extends ApiService<Usuario> {
  constructor(protected http: HttpClient, protected usuarioGlobal: UsuarioGlobalServices) {
    super(http, '/safe/usuarios', usuarioGlobal);
  }

  public save = (payload: Usuario, security: boolean = false) => (
    mapToResponse(() =>
      this.http.post('/usuarios', payload, security ? this.securityHeaders() : this.options)
    )
  );

  public login = (payload: Login) => (
    mapToResponse(() =>
      this.http.post(`${environment.base_url}/login`, payload, this.options))
  );
}
