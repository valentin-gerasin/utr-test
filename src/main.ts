import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { environment } from './environments/environment.prod';
import { AppComponent } from './app/app.component';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { MaterialModule } from './app/shared/modules/material.module';
import { appRoutes } from './app/app.routes';
import { authFeatureKey, AuthReducer } from './app/store/auth/auth.reducer';
import { AuthEffects } from './app/store/auth/auth.effects';
import { ProductsEffects } from './app/store/products/products.effects';
import {
  productsFeatureKey,
  ProductsReducer,
} from './app/store/products/products.reducer';
import { MainInterceptor } from './app/interceptors/auth.interceptor';
import {
  loaderFeatureKey,
  LoaderReducer,
} from './app/store/loader/loader.reducer';
import { LoaderEffects } from './app/store/loader/loader.effects';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserAnimationsModule,
      CommonModule,
      BrowserModule,
      MaterialModule,
      RouterModule.forRoot(appRoutes)
    ),
    provideHttpClient(withInterceptors([MainInterceptor])),
    provideStore({
      [authFeatureKey]: AuthReducer,
      [productsFeatureKey]: ProductsReducer,
      [loaderFeatureKey]: LoaderReducer,
    }),
    provideEffects([AuthEffects, ProductsEffects, LoaderEffects]),

    // alternative to `StoreDevtoolsModule.instrument`
    provideStoreDevtools({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),

    provideAnimations(),
  ],
}).catch((err) => console.error(err));
