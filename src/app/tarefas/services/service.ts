import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Tarefa} from '../../../models/tarefa';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import {catchError, map} from 'rxjs/operators';
import {ApiService} from '../../../services-utils/api.service';
import {UsuarioGlobalServices} from '../../services/usuario.global.services';

@Injectable()
export class TarefasService extends ApiService<Tarefa> {
  constructor(protected http: HttpClient, protected usuarioGlobal: UsuarioGlobalServices) {
    super(http, '/tarefas', usuarioGlobal);
  }
}
