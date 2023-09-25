import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ILoginResponse, ILogin } from '../../interfaces/auth.interfaces';
import { environment } from 'src/environments/environment';
import { EStorageKeys } from '../../models/auth.enums';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public login(user: ILogin): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(`${this.apiUrl}login_check`, user);
  }

  public setUser(user: ILoginResponse): void {
    localStorage.setItem(EStorageKeys.Token, user.token);
  }

  public isAuthUser(): boolean {
    return !!localStorage.getItem(EStorageKeys.Token);
  }
}
