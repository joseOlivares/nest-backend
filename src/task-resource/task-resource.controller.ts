import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { TaskResourceService } from './task-resource.service';
import { CreateTaskResourceDto } from './dto/create-task-resource.dto';
import { UpdateTaskResourceDto } from './dto/update-task-resource.dto';

@Controller('task-prisma')
export class TaskResourceController {
  constructor(private readonly taskResourceService: TaskResourceService) {}

  @Post()
  async create(@Body() createTaskResourceDto: CreateTaskResourceDto) {
    return this.taskResourceService.create(createTaskResourceDto);
  }

  @Get()
  async findAll() {
    return this.taskResourceService.findAll();
  }

  @Get('search')
  async findByTitle(@Query('title') title: string) {
    //localhost:3000/task-prisma/search?title=agua
    const searchResult = await this.taskResourceService.findByTitle(title);
    if (searchResult.length === 0) {
      throw new NotFoundException('Task not found');
    }
    return this.taskResourceService.findByTitle(title);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const taskFound = await this.taskResourceService.findOne(+id);
    if (!taskFound) {
      throw new NotFoundException('Task not found');
    }
    return taskFound;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTaskResourceDto: UpdateTaskResourceDto) {
    try {
      return await this.taskResourceService.update(+id, updateTaskResourceDto);
    } catch (error) {
      throw new NotFoundException('Task not found');
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.taskResourceService.remove(+id);
    } catch (error) {
      console.error('Error removing task:', error);
      throw new NotFoundException('Task not found');
    }
  }
}
