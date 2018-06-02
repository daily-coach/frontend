import {Component} from '@angular/core';
import {TarefasActions} from './store/actions';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {Tarefa} from '../../models/tarefa';

@Component({
  selector: 'tarefas-component',
  templateUrl: './component.html'
})
export class TarefasComponent {
  @select() readonly tarefas$: Observable<Array<Tarefa>>;
  tarefa: Tarefa;

  constructor(private actions: TarefasActions) {
    this.initTarefa();
  }

  public addTarefa() {
    this.actions.addTarefaServer(this.tarefa);
    this.initTarefa();
  }

  initTarefa() {
    this.tarefa = {
      titulo: '',
      descricao: '',
      dia: null
    };
  }
}
