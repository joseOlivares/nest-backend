import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './interfaces/task/task.interface';
import { CreateTaskDto } from './dto/create-task.dto';
@Injectable()
export class TaskService {
  private tasks: Task[] = [
    { id: '1', title: 'Task 1', description: 'Description 1' },
    { id: '2', title: 'Task 2', description: 'Description 2' },
  ];
  getTasks() {
    return this.tasks;
  }

  getTask(id: string) {
    const taskFound = this.tasks.find(task => task.id === id);

    if (taskFound) {
      return taskFound;
    }
    return new NotFoundException('Task not found'); // NotFoundException;
  }

  createTask(task: CreateTaskDto) {
    const newTask: Task = {
      id: (this.tasks.length + 1).toString(),
      ...task,
    };
    this.tasks.push(newTask);
    return 'Create a task';
  }

  updateTask() {
    return 'Update a task';
  }

  deleteTask() {
    return 'Delete a task';
  }

  updateTaskStatus() {
    return 'Update a task status';
  }
}
