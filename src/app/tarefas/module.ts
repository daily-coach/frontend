import {NgModule} from '@angular/core';
import {TarefasComponent} from './component';
import {TarefasActions} from './store/actions';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TarefasService} from './services/service';
import {TarefasEpics} from './store/epics';
import {TarefasListComponent} from './components/tarefas-list/tarefas-list.component';
import {AppMaterialModule} from '../app-material.module';

@NgModule({
  declarations: [
    TarefasComponent,
    TarefasListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppMaterialModule,
    HttpClientModule
  ],
  exports: [
    TarefasComponent,
    TarefasListComponent
  ],
  providers: [
    TarefasActions,
    TarefasService,
    TarefasEpics
  ]
})
export class TarefasModule { }
