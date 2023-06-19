export class Credentials {
  accessToken: string = '';
  refreshToken: string = '';

  readonly accessTokenExpiration;
  private readonly ACCESS_TOKEN_EXPIRATION_IN_SECONDS = 270;

  readonly refreshTokenExpiration;
  private readonly REFRESH_TOKEN_EXPIRATION_IN_SECONDS = 86400;
  public constructor(init?: Partial<Credentials>) {
    Object.assign(this, init);
    const now = new Date();
    this.accessTokenExpiration = new Date(now.getTime() + this.ACCESS_TOKEN_EXPIRATION_IN_SECONDS * 1000);
    this.refreshTokenExpiration = new Date(now.getTime() + this.REFRESH_TOKEN_EXPIRATION_IN_SECONDS * 1000);
  }
}
