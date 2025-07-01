import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  getTasks() {
    return 'Get all tasks';
  }
}
