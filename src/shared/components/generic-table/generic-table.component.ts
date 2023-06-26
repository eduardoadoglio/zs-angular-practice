import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../../models/user";

@Component({
  selector: 'zs-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent {

  @Input()
  dataSource: any[] = []

  @Input()
  columns: string[] = []

  @Input()
  title: string = '';

  @Output()
  onDelete = new EventEmitter<User>();

  @Output()
  onCreate = new EventEmitter<void>();

  get displayedColumns() {
    return [...this.columns, 'actions'];
  }
}
