import { Module } from '@nestjs/common';
import { TaskResourceService } from './task-resource.service';
import { TaskResourceController } from './task-resource.controller';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Module({
  controllers: [TaskResourceController],
  providers: [TaskResourceService, PrismaService],
})
export class TaskResourceModule {}
