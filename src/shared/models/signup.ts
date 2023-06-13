
export class SignUpModel {
  email: string = ''
  password: string = ''
  confirm_password: string = ''

  public constructor(init?: Partial<SignUpModel>) {
    Object.assign(this, init);
  }
}
