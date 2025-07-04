import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { HelloController } from './hello/hello.controller';
import { UserResourceModule } from './user-resource/user-resource.module';
import { PrismaService } from './services/prisma/prisma.service';
import { TaskResourceModule } from './task-resource/task-resource.module';

@Module({
  imports: [TasksModule, AuthModule, UsersModule, ProjectsModule, UserResourceModule, TaskResourceModule],
  controllers: [HelloController],
  providers: [PrismaService],
})
export class AppModule {}
