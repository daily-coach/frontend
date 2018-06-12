import {Component} from '@angular/core';
import {MatCheckboxChange, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Tarefa} from '../../../../models/entities/tarefa';
import {TarefasActions} from '../../store/actions';
import {Observable} from 'rxjs/Observable';
import {Usuario} from '../../../../models/entities/usuario';
import {select} from '@angular-redux/store';
import {Dia} from '../../../../models/entities/dia';
import {TarefaDia} from '../../../../models/entities/tarefa-dia';
import {ServerEnum} from '../../../../models/enums/server.enum';
@Component({
  selector: 'tarefas-form-component',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class TarefasFormComponent {

  @select() usuario$: Observable<Usuario>;
  @select(['tarefas', 'dias']) dias$: Observable<Dia[]>;
  @select(['tarefas', 'serverState']) serverState$: Observable<ServerEnum>;

  tarefa: Tarefa;
  form: FormGroup;

  constructor(
    private actions: TarefasActions,
    private dialogRef: MatDialogRef<TarefasFormComponent>,
    private fb: FormBuilder) {

    this.tarefa = this.initTarefa();
    this.form = fb.group({
      titulo: [],
      descricao: [],
    });

    this.usuario$.subscribe(usuario => this.tarefa.usuariosId = usuario.id);
    this.dialogRef.afterClosed().subscribe(_ => this.actions.changeServerState(ServerEnum.WAITING))
    this.serverState();
  }

  save = () => this.actions.addTarefaServer(this.tarefa);
  dias = (): Observable<Dia[]> => this.dias$.map(dias => dias.sort((a, b) => a.id - b.id));
  close = () => this.dialogRef.close();
  initTarefa = (): Tarefa => ({
    titulo: '',
    descricao: '',
    tarefaDias: [],
    usuariosId: null
  });

  hasDia(dia: Dia): boolean {
    const result = this.tarefa.tarefaDias.find(d => d.diasId === dia.id);
    return !!result;
  }

  addDia(change: MatCheckboxChange, dia: Dia) {
    const result = this.tarefa.tarefaDias.find(d => d.diasId === dia.id);

    if (result) {
      if (!change.checked) {
        const index = this.tarefa.tarefaDias.indexOf(result);

        if (result.id) {
          this.tarefa.tarefaDias[index].active = false;
        } else {
          this.tarefa.tarefaDias.splice(index, 1);
        }
      }
      return;
    }

    const tarefaDia: TarefaDia = {
      diasId: dia.id
    };

    this.tarefa.tarefaDias.push(tarefaDia);
  }

  serverState = () => {
    this.serverState$.subscribe(state => {
      switch (state) {
        case ServerEnum.ERROR:
          this.actions.changeServerState(ServerEnum.WAITING);
          break;
        case ServerEnum.COMPLETED:
          this.dialogRef.close();
          break;
      }
    })
  }

}
