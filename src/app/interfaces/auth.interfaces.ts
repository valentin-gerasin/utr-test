export interface ILogin {
  email: string;
  password: string;
  browser_fingerprint: string;
}

export interface ILoginResponse {
  token: string;
  expires_at: string;
  refresh_token: string;
}
