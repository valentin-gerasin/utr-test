import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { GetItemsByArticle } from 'src/app/store/products/products.actions';
import {
  selectAnalogs,
  selectCharacteristics,
  selectResults,
  selectUsage,
} from 'src/app/store/products/products.selectors';
import {
  ICar,
  ICharacteristic,
  IItemUsage,
  IProductItem,
  ITableTypes,
} from 'src/app/interfaces/products.interfaces';
import { CarInfoComponent } from './components/car-info/car-info.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { TableComponent } from './components/table/table.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgClass,
    AsyncPipe,
    MaterialModule,
    TableComponent,
    ReactiveFormsModule,
    CarInfoComponent,
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
  public searchFormControl: FormControl = new FormControl('', [
    Validators.minLength(3),
    Validators.required,
  ]);

  public tableTypes: ITableTypes = {
    results: 'results',
    analogs: 'analogs',
  };

  public results$: Observable<IProductItem[]> =
    this.store$.select(selectResults);
  public analogs$: Observable<IProductItem[]> =
    this.store$.select(selectAnalogs);
  public usage$: Observable<IItemUsage[]> = this.store$.select(selectUsage);
  public characteristics$: Observable<ICharacteristic[]> = this.store$.select(
    selectCharacteristics
  );

  public usage: IItemUsage[] = [];

  public selectedManufacturer: string | undefined;
  public selectedModel: string | undefined;

  constructor(private store$: Store, private destroyRef: DestroyRef) {}

  ngOnInit(): void {
    this.usage$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
      this.usage = [...data];

      this.selectedManufacturer = data.length ? data[0].manufacturer : '';
      this.selectedModel = data.length ? data[0].models?.[0]?.model : '';
    });
  }

  public getItemsByArticle(): void {
    if (!this.searchFormControl.valid) return;

    this.store$.dispatch(
      GetItemsByArticle({ article: this.searchFormControl.value })
    );
  }

  public onManufacturerSelected(): void {
    // Update the selected models based on the selected manufacturer
    const manufacturer = this.usage.find(
      (item) => item.manufacturer === this.selectedManufacturer
    );
    if (manufacturer) {
      // Select the first model of the selected manufacturer
      this.selectedModel = manufacturer.models[0]?.model;
    }
  }

  public getModelOptions(): string[] {
    const selectedUsage = this.getSelectedManufacturer();

    return selectedUsage
      ? selectedUsage.models.map((model) => model.model)
      : [];
  }

  public getCarsForModel(): ICar[] {
    return (
      this.getSelectedManufacturer()?.models.find(
        (m) => m.model === this.selectedModel
      )?.cars || []
    );
  }

  public getSelectedManufacturer(): IItemUsage | undefined {
    return this.usage.find(
      (item) => item.manufacturer === this.selectedManufacturer
    );
  }
}
