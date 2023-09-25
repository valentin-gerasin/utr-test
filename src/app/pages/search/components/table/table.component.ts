import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  ViewChild,
  SimpleChanges,
} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';

import { MaterialModule } from 'src/app/shared/modules/material.module';
import { IProductItem } from 'src/app/interfaces/products.interfaces';
import {
  GetDetailCharacteristics,
  GetDetailUsage,
  SetActiveElement,
} from 'src/app/store/products/products.actions';
import { selectActiveElement } from 'src/app/store/products/products.selectors';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgIf, NgClass, AsyncPipe, MaterialModule, MatPaginatorModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnChanges {
  @Input() products: IProductItem[] | null;
  @Input() tableType: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  public dataSource: MatTableDataSource<IProductItem>;
  public pageSize = 10;
  public pageSizeOptions: number[] = [10, 30, 50];

  public displayedColumns: string[] = [
    'article',
    'title',
    'remains',
    'price',
    'action',
  ];

  public activeElement$: Observable<IProductItem | null> = this.store$.pipe(
    select(selectActiveElement)
  );

  constructor(private store$: Store) {
    this.dataSource = new MatTableDataSource<IProductItem>();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products'] && this.products) {
      this.dataSource = new MatTableDataSource<IProductItem>(this.products);
      this.dataSource.paginator = this.paginator;
    }
  }

  public chooseElement(row: IProductItem): void {
    this.store$.dispatch(SetActiveElement({ element: row }));

    this.store$.dispatch(GetDetailUsage({ id: row.id }));

    this.store$.dispatch(GetDetailCharacteristics({ id: row.id }));
  }
}
