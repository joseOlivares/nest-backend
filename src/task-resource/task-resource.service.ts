import { Injectable } from '@nestjs/common';
import { CreateTaskResourceDto } from './dto/create-task-resource.dto';
import { UpdateTaskResourceDto } from './dto/update-task-resource.dto';

@Injectable()
export class TaskResourceService {
  create(createTaskResourceDto: CreateTaskResourceDto) {
    return 'This action adds a new taskResource';
  }

  findAll() {
    return `This action returns all taskResource`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taskResource`;
  }

  update(id: number, updateTaskResourceDto: UpdateTaskResourceDto) {
    return `This action updates a #${id} taskResource`;
  }

  remove(id: number) {
    return `This action removes a #${id} taskResource`;
  }
}
