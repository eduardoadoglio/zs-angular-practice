import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {User} from "../../models/user";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'zs-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent implements AfterViewInit {

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

  matTableDatasource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

  @ViewChild('paginator')
  paginator: any = MatPaginator;

  get displayedColumns() {
    return [...this.columns, 'actions'];
  }

  ngAfterViewInit() {
    this.matTableDatasource = new MatTableDataSource(this.dataSource);
    this.matTableDatasource.paginator = this.paginator;
  }
}
