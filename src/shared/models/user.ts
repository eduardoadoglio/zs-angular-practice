export class User {
  username: string = ''
  password: string = ''

  public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
