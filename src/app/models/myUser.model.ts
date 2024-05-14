export class User {
  /*   userName: string | null;
  email: string | null;
  password: string | null;
  street: string | null;
  number: string | null;
  zipcode: string | null;
  city: string | null; */

  constructor(
    public userName: string | null,
    public email: string | null,
    public password: string | null,
    public street: string | null,
    public number: string | null,
    public zipcode: string | null,
    public city: string | null
  ) {
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.street = street;
    this.number = number;
    this.zipcode = zipcode;
    this.city = city;
  }
}
