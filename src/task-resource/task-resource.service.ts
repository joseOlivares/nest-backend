import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { Prisma, Task } from '../../generated/prisma/index';
/**
 * Service for managing tasks in the database.
 * Provides methods to create, find, update, and delete tasks.
 * Uses Prisma ORM for database interactions.
 * IMplmentación de Prisma para la gestión de tareas.
 */
@Injectable()
export class TaskResourceService {
  constructor(private prismaService: PrismaService) {}

  async create(data: Prisma.TaskCreateInput): Promise<Task> {
    return await this.prismaService.task
      .create({
        data,
      })
      .catch(error => {
        console.error('Error creating task in database:', error);
        throw new Error('Failed to create task in database');
      });
  }

  async findAll() {
    return await this.prismaService.task.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.task.findUnique({
      where: { id },
    });
  }

  async findByTitle(title: string) {
    return this.prismaService.task.findMany({
      where: {
        title: {
          contains: title,
        },
      },
    });
    //HAciendo consulta SQL
    /*    return this.prismaService.$queryRaw`
      SELECT * FROM Task WHERE LOWER(title) LIKE LOWER(${`%${title}%`})
    `;
    */
  }

  async update(id: number, data: Prisma.TaskUpdateInput) {
    return this.prismaService.task.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prismaService.task.delete({
      where: { id },
    });
  }
}
