import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {mapToResponse} from './api.utils';
import {environment} from '../environments/environment';
import {UsuarioGlobalServices} from '../app/services/usuario.global.services';
import {Usuario} from '../models/usuario';
import {EventEmitter} from '@angular/core';

export class ApiService <T> {

  protected options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  protected usuario: Usuario;
  protected http: HttpClient;
  protected usuarioGlobal: UsuarioGlobalServices;
  protected urlSegment: string;
  protected url: string;
  protected httpErrorEvent: EventEmitter<any>;

  constructor(http: HttpClient, urlSegment: string, usuarioGlobal: UsuarioGlobalServices) {
    this.http = http;
    this.urlSegment = urlSegment;
    this.url = `${environment.base_url}${this.urlSegment}`;
    this.usuarioGlobal = usuarioGlobal;
    this.usuarioGlobal.usuario$.subscribe(usuario => this.usuario = usuario);
    this.httpErrorEvent = new EventEmitter();
  }

  public save = (payload: T, security: boolean = false): Observable<any> =>
    mapToResponse(() =>
      this.http.post(this.url, payload, security ? this.securityHeaders() : this.options)
    , this.errorHandler());

  public update = (payload: T, id: number, security: boolean = false): Observable<any> =>
    mapToResponse(() =>
      this.http.put(`${this.url}/${id}`, payload, security ? this.securityHeaders() : this.options)
    , this.errorHandler());

  public getById = (id: number, security: boolean = false): Observable<any> =>
    mapToResponse(() =>
      this.http.get(`${this.url}/${id}`, security ? this.securityHeaders() : this.options)
    , this.errorHandler());

  public getAll = (security: boolean = false): Observable<any> =>
    mapToResponse(() =>
      this.http.get(this.url, security ? this.securityHeaders() : this.options)
    , this.errorHandler());

  public remove = (id: number, security: boolean = false): Observable<any> =>
    mapToResponse(() =>
      this.http.delete(`${this.url}/${id}`, security ? this.securityHeaders() : this.options)
    , this.errorHandler());

  protected securityHeaders = () => ({
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.usuario.token
    })
  });

  protected errorHandler = () => (error: HttpErrorResponse) => {
    console.log(error);
    this.httpErrorEvent.emit(error.error);
  }

}
