import {Component, OnInit} from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {TarefasActions} from '../../store/actions';
import {MatDialog} from '@angular/material';
import {TarefasFormComponent} from '../form/component';
import {Dia} from '../../../../models/entities/dia';
import {Tarefa} from '../../../../models/entities/tarefa';
import {TarefasState} from '../../../../models/states/tarefa.state';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mapTo';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Component({
  selector: 'tarefas-list-component',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class TarefasListComponent implements OnInit {

  private list: Tarefa[];
  private dias: Dia[];

  @select('tarefas') state$: Observable<TarefasState>;

  readonly config: any = {
    width: '400px'
  };

  constructor(private actions: TarefasActions, private dialog: MatDialog) {
    this.state$.subscribe(state => {
      this.dias = state.dias.sort((a, b) => a.id - b.id);
      this.list = state.tarefas;
    });
  }

  ngOnInit() {
    this.actions.addDiasServer();
    this.actions.loadTarefasServer();
  }

  add = () => {
    const dialog = this.dialog.open(TarefasFormComponent, this.config);
    dialog.afterClosed().subscribe(_ => this.actions.loadTarefasServer());
  };

  tarefasDoDia(dia: Dia): Observable<Tarefa[]> {
    const tarefas$: BehaviorSubject<Tarefa[]> = new BehaviorSubject([]);
    const tarefas: Tarefa[] = [];
    this.list.forEach(tarefa => {
      const result = tarefa.tarefaDias.find(d => d.diasId === dia.id);
      if (result) {
        tarefas.push(tarefa);
        tarefas$.next(tarefas);
      }
    });
    return tarefas$;
  }

}
