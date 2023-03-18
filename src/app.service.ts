import { Injectable } from '@nestjs/common';

export interface User {
  id?: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

@Injectable()
export class AppService {
  private users: User[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  getUsers() {
    return this.users;
  }

  createUser(email: string, password: string): User {
    const user: User = {
      email,
      password,
    };
    this.users.push(user);
    return user;
  }
}
