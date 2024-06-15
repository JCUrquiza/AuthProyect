import { User } from './login.interface';

export interface CheckTokenResponse {
  user:  User;
  token: string;
}


