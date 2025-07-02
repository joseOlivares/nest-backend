import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TaskService) {}

  @Get()
  getTasks() {
    return this.taskService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id: string) {
    return this.taskService.getTask(id);
  }

  @Post()
  @UsePipes(new ValidationPipe()) // This decorator is used to apply validation pipes to the incoming request body
  // The UsePipes decorator is typically used to apply validation or transformation pipes to the incoming request body
  // It ensures that the incoming data is validated according to the rules defined in the
  createTask(@Body() task: CreateTaskDto) {
    return this.taskService.createTask(task);
  }

  @Put()
  updateTask() {
    return this.taskService.updateTask();
  }

  @Patch()
  patchTask() {
    return this.taskService.updateTaskStatus();
  }

  @Delete()
  deleteTask() {
    return this.taskService.deleteTask();
  }
}
