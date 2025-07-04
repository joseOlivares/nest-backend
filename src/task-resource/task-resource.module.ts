import { Module } from '@nestjs/common';
import { TaskResourceService } from './task-resource.service';
import { TaskResourceController } from './task-resource.controller';

@Module({
  controllers: [TaskResourceController],
  providers: [TaskResourceService],
})
export class TaskResourceModule {}
