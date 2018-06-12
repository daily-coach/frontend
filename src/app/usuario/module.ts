import {NgModule} from '@angular/core';
import {UsuarioActions} from './store/actions';
import {AppMaterialModule} from '../app-material.module';
import {LoginComponent} from './components/login/component';
import {UsuarioEpics} from './store/epics';
import {UsuarioServices} from './services/usuario.services';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    UsuarioActions,
    UsuarioEpics,
    UsuarioServices
  ]
})
export class UsuarioModule {

}
