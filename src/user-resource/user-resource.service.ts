import { Injectable } from '@nestjs/common';
import { CreateUserResourceDto } from './dto/create-user-resource.dto';
import { UpdateUserResourceDto } from './dto/update-user-resource.dto';

@Injectable()
export class UserResourceService {
  create(createUserResourceDto: CreateUserResourceDto) {
    return 'This action adds a new userResource';
  }

  findAll() {
    return `This action returns all userResource`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userResource`;
  }

  update(id: number, updateUserResourceDto: UpdateUserResourceDto) {
    return `This action updates a #${id} userResource`;
  }

  remove(id: number) {
    return `This action removes a #${id} userResource`;
  }
}
