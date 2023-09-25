import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  ICharacteristic,
  IItemUsage,
  IProductItem,
  IProducts,
} from '../../interfaces/products.interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl: string = environment.apiUrl;
  private catalogApiUrl: string = environment.catalogApiUrl;

  constructor(private http: HttpClient) {}

  public findByArticle(article: string): Observable<IProducts> {
    return this.http.get<IProducts>(`${this.apiUrl}search/${article}`);
  }

  public findAnalogs(
    items: IProductItem[] | IProductItem
  ): Observable<IProductItem[]> {
    let firstItem: IProductItem | undefined = Array.isArray(items)
      ? items[0]
      : items;

    if (!firstItem) return of([]);

    return this.http.get<IProductItem[]>(
      `${this.apiUrl}analogs/${firstItem.brand.name}/${firstItem.article}`
    );
  }

  public getDetailUsage(detailId: number): Observable<IItemUsage[]> {
    return this.http.get<IItemUsage[]>(
      `${this.apiUrl}applicability/${detailId}`
    );
  }

  public getDetailCharacteristics(
    detailId: number
  ): Observable<ICharacteristic[]> {
    return this.http.get<ICharacteristic[]>(
      `${this.catalogApiUrl}${detailId}/characteristics`
    );
  }
}
