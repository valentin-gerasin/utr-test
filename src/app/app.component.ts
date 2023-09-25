import { Component, DestroyRef, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { NgIf } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { selectComplexLoader } from './store/loader/loader.selectors';
import { LoaderComponent } from './shared/components/loader/loader.component';

@Component({
  standalone: true,
  imports: [NgIf, RouterOutlet, LoaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public isLoaderOn$ = this.store$.select(selectComplexLoader);
  public isLoaderOn: boolean = false;

  constructor(private store$: Store, private destroyRef: DestroyRef) {}

  ngOnInit(): void {
    this.isLoaderOn$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data) => {
        this.isLoaderOn = Object.values(data).some((loader) => loader);
      });
  }
}
