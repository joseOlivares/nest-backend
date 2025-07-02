import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { HelloController } from './hello/hello.controller';

@Module({
  imports: [TasksModule, AuthModule, UsersModule, ProjectsModule],
  controllers: [HelloController],
  providers: [],
})
export class AppModule {}
