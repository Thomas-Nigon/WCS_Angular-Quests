export class User {
  userName: string | null;
  email: string | null;
  password: string | null;
  street: string | null;
  number: string | null;
  zipcode: string | null;
  city: string | null;

  constructor(
    userName: string | null,
    email: string | null,
    password: string | null,
    street: string | null,
    number: string | null,
    zipcode: string | null,
    city: string | null
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
