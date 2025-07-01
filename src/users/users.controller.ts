import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/') // This is a GET request handler for the /users route, which returns a messa
  getUsers() {
    return this.usersService.getUsers();
  }
}
