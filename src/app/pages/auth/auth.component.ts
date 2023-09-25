import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { MaterialModule } from 'src/app/shared/modules/material.module';
import { UserLogin } from 'src/app/store/auth/auth.actions';
import { ILogin } from 'src/app/interfaces/auth.interfaces';
import { EStorageKeys } from 'src/app/models/auth.enums';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit {
  public loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  public isPasswordVisible: boolean = false;

  constructor(
    private fb: FormBuilder,
    private store$: Store,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.checkIsUserLoggedIn();
  }

  public signIn(): void {
    let userLogin: ILogin = {
      ...this.loginForm.value,
      browser_fingerprint: 'random-string',
    };
    this.store$.dispatch(UserLogin({ user: userLogin }));
  }

  public checkIsUserLoggedIn(): void {
    const userString = localStorage.getItem(EStorageKeys.Token);
    if (!userString) return;
    this.router.navigate(['/search']);
  }
}
