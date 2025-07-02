import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: CreateUserDto[] = [
    { name: 'John', email: 'j@j.com', password: '123' },
    { name: 'Jane', email: 'j@j.com', password: '123' },
  ];

  getUsers() {
    return this.users;
  }

  createUser(user: CreateUserDto) {
    this.users.push(user);
  }
}
