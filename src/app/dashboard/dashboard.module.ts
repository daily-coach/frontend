import {NgModule} from '@angular/core';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AppMaterialModule} from '../app-material.module';
import {TarefasModule} from '../tarefas/module';
import {DashboardActions} from './store/actions';
import {CommonModule} from '@angular/common';
@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
    TarefasModule
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
    DashboardActions
  ]
})
export class DashboardModule { }
