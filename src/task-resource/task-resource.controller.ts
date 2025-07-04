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
    // Path: http://localhost:3000/task-prisma/search?title=agua
    if (!title) {
      throw new NotFoundException('Title parameter is required');
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
    const taskFound = await this.taskResourceService.findOne(+id);
    if (!taskFound) {
      throw new NotFoundException('Task not found');
    }
    return this.taskResourceService.update(+id, updateTaskResourceDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const taskFound = await this.taskResourceService.findOne(+id);
    if (!taskFound) {
      throw new NotFoundException('Task not found');
    }
    return this.taskResourceService.remove(+id);
  }
}

/*
Problemas corregidos:
GET /search:
  liminé la llamada duplicada al servicio

  Cambié la lógica: ahora retorna array vacío [] si no encuentra nada (comportamiento estándar)

  Agregué validación para el parámetro title
PATCH /:id:

  Cambié el try-catch por validación explícita

  Ahora verifica si existe antes de actualizar

DELETE /:id:
  Cambié el try-catch por validación explícita

  Ahora verifica si existe antes de eliminar

*****  Comportamiento mejorado: **************

  Búsquedas sin resultados retornan [] (estándar REST)

  Operaciones sobre recursos inexistentes retornan 404

  Manejo de errores más predecible y consistente
*/