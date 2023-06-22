export class Credentials {
  accessToken: string = '';
  refreshToken: string = '';

  accessTokenExpiration: Date;
  private readonly ACCESS_TOKEN_EXPIRATION_IN_SECONDS = 270;

  refreshTokenExpiration: Date;
  private readonly REFRESH_TOKEN_EXPIRATION_IN_SECONDS = 86400;
  public constructor(init?: Partial<Credentials>) {
    Object.assign(this, init);
    const now = new Date();
    this.accessTokenExpiration = new Date(now.getTime() + this.ACCESS_TOKEN_EXPIRATION_IN_SECONDS * 1000);
    this.refreshTokenExpiration = new Date(now.getTime() + this.REFRESH_TOKEN_EXPIRATION_IN_SECONDS * 1000);
  }

  fromLocalStorage(): Credentials {
    this.accessToken = localStorage.getItem('accessToken') ?? '';
    this.refreshToken = localStorage.getItem('refreshToken') ?? '';
    this.accessTokenExpiration = new Date(Date.parse(localStorage.getItem('accessTokenExpiration') ?? ''));
    this.refreshTokenExpiration = new Date(Date.parse(localStorage.getItem('refreshTokenExpiration') ?? ''));
    return this;
  }
}
