import { Role } from './role';

export class User {
  userName: string;
  userFirstName: string;
  userLastName: string;
  userPassword: string;
  email: string;
  //image:string;
  role: Role[];
}
