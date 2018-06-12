import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Tarefa} from '../../../models/entities/tarefa';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import {catchError, map} from 'rxjs/operators';
import {ApiService} from '../../../services-utils/api.service';
import {UsuarioGlobalServices} from '../../services/usuario.global.services';
import {mapToResponse} from '../../../services-utils/api.utils';

@Injectable()
export class TarefasService extends ApiService<Tarefa> {
  constructor(protected http: HttpClient, protected usuarioGlobal: UsuarioGlobalServices) {
    super(http, '/safe/tarefas', usuarioGlobal);
  }
  public getDias = () => (
    mapToResponse(() =>
      this.http.get(`${environment.base_url}/safe/dias`, this.securityOptions())
    )
  );
}
