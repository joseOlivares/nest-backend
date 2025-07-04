import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get() // This is a GET request handler for the /users route, which returns a messa
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post('local') // This is a POST request handler for the /users route, which returns a message
  //@UsePipes(new ValidationPipe({ disableErrorMessages: true })) // This decorator is used to apply validation pipes to the incoming request body
  // The UsePipes decorator is typically used to apply validation or transformation pipes to the incoming request body
  createLocalUser(@Body() user: CreateUserDto) {
    console.log(user);
    return this.usersService.createUser(user);
  }

  @Post('create')
  async createUserInDatabase(@Body() user: CreateUserDto) {
    console.log(user);
    return this.usersService.createInDatabase(user);
  }

  @Get('all')
  async getAllUsersFromDatabase() {
    return this.usersService.getAllUsersFromDatabase();
  }
}
