import {Component, OnInit} from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {Tarefa} from '../../../../models/tarefa';
import {TarefasActions} from '../../store/actions';
@Component({
  selector: 'tarefas-list-component',
  templateUrl: './tarefas-list.component.html',
  styleUrls: ['./tarefas-list.component.scss']
})
export class TarefasListComponent implements OnInit {

  @select() tarefas$: Observable<Array<Tarefa>>;

  constructor(private actions: TarefasActions) {

  }

  ngOnInit() {
    this.actions.loadTarefasServer();
  }
}
