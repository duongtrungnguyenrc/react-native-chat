import { Validator } from "./validator.model";

export class RegisterAccountRequest extends Validator {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirm?: string;

  constructor() {
    super()
    this.email = "";
    this.password = "";
    this.confirm = "";
    this.name = "";
    this.phone = "";
  }

  validate(): string | null {
    if (this.password !== this.confirm) {
      return "Confirm password does not match";
    }

    return super.validate();
  }
}
