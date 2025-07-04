import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskResourceService } from './task-resource.service';
import { CreateTaskResourceDto } from './dto/create-task-resource.dto';
import { UpdateTaskResourceDto } from './dto/update-task-resource.dto';

@Controller('task-resource')
export class TaskResourceController {
  constructor(private readonly taskResourceService: TaskResourceService) {}

  @Post()
  create(@Body() createTaskResourceDto: CreateTaskResourceDto) {
    return this.taskResourceService.create(createTaskResourceDto);
  }

  @Get()
  findAll() {
    return this.taskResourceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskResourceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskResourceDto: UpdateTaskResourceDto) {
    return this.taskResourceService.update(+id, updateTaskResourceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskResourceService.remove(+id);
  }
}
