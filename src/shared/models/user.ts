export class User {
  id!: number;
  username: string = '';
  email: string = '';
  password: string = '';
  created_at: string = '';

  public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
