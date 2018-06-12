import {NgModule} from '@angular/core';
import {TarefasActions} from './store/actions';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TarefasService} from './services/service';
import {TarefasEpics} from './store/epics';
import {TarefasListComponent} from './components/list/component';
import {AppMaterialModule} from '../app-material.module';
import {TarefasFormComponent} from './components/form/component';

@NgModule({
  declarations: [
    TarefasListComponent,
    TarefasFormComponent
  ],
  entryComponents: [
    TarefasFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    HttpClientModule
  ],
  exports: [
    TarefasListComponent
  ],
  providers: [
    TarefasActions,
    TarefasService,
    TarefasEpics
  ]
})
export class TarefasModule { }
