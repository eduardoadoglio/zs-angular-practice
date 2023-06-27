export class User {
  id?: number;
  username: string = '';
  email: string = '';
  password: string = '';
  created_at: string = '';
  updated_at: string = '';
  password_updated_at: string = '';
  is_email_verified: boolean = false;


  public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
