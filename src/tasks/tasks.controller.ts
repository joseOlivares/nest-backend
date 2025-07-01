import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TaskService) {}

  @Get()
  getTasks() {
    return this.taskService.getTasks();
  }

  @Post()
  createTask() {
    return 'Create a task';
  }

  @Put()
  updateTask() {
    return 'Update a task';
  }

  @Patch()
  patchTask() {
    return 'Patch a task';
  }

  @Delete()
  deleteTask() {
    return 'Delete a task';
  }
}
