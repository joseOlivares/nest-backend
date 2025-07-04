import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { Prisma } from 'generated/prisma';

@Injectable()
export class UsersService {
  private users: CreateUserDto[] = [
    { name: 'John', username: 'john316', email: 'jhon@company.com', password: '123' },
    { name: 'Jane', username: 'jane50', email: 'jane@company.com', password: '123' },
  ];

  constructor(private prismaService: PrismaService) {}

  getUsers() {
    return this.users;
  }

  createUser(user: CreateUserDto) {
    this.users.push(user);
  }

  async createInDatabase(user: Prisma.UserCreateInput) {
    //antes usabamos CreateUserDto pero podemos usar Prisma.UserCreateInput
    return this.prismaService.user
      .create({
        data: {
          name: user.name,
          username: user.username,
          email: user.email,
          password: user.password,
        },
        //esta configuración la agregamos
        omit: {
          password: true,
        }, // Omit password from the response
      })
      .catch(error => {
        console.error('Error creating user in database:', error);
        throw new Error('Failed to create user in database');
      });
  }

  async getAllUsersFromDatabase() {
    return this.prismaService.user.findMany({
      //esta configuración la agregamos
      omit: {
        password: true,
      }, // Omit password from the response
    });
  }
}
