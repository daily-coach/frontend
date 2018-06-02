import {Injectable} from '@angular/core';
import {TarefasEpics} from '../tarefas/store/epics';
import {Middleware} from 'redux';
import {UsuarioEpics} from '../usuario/store/epics';

@Injectable()
export class Epics {

  constructor(private tarefasEpics: TarefasEpics,
              private usuarioEpics: UsuarioEpics) { }

  createEpics(): Array<Middleware> {
    return [
      ...this.tarefasEpics.createEpic(),
      ...this.usuarioEpics.createEpic()
    ];
  }

}
