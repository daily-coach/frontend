import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {DevToolsExtension, NgRedux, NgReduxModule} from '@angular-redux/store';
import { LocalStorageModule } from 'angular-2-local-storage';
import {AppState} from '../models/app-state';
import rootReducer, {INITIAL_STATE} from './store/reducers';
import {Epics} from './store/epics';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DashboardModule} from './dashboard/dashboard.module';
import {UsuarioModule} from './usuario/usuario.module';
import {UsuarioGlobalServices} from './services/usuario.global.services';
import {AppActions} from './store/actions';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {AppAuth} from './app.auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    LocalStorageModule.withConfig({
      prefix: 'dc-web',
      storageType: 'localStorage'
    }),
    DashboardModule,
    UsuarioModule,
    NgReduxModule
  ],
  providers: [
    Epics,
    UsuarioGlobalServices,
    AppActions,
    AppAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<AppState>,
              private epics: Epics,
              private devTools: DevToolsExtension) {

    let enhancers = [];

    if (devTools.isEnabled()) {
      enhancers = [devTools.enhancer()];
    }

    ngRedux.configureStore(rootReducer, INITIAL_STATE, epics.createEpics(), enhancers);
  }
}
