import { Injectable } from '@nestjs/common';
// import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.schema';
import { IdResponse } from './interfaces/id-response.interface';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  private idCounter = 1;

  create(task: CreateTaskDto): IdResponse {
    const id = '' + this.idCounter++;
    this.tasks.push({ ...task, id });
    return { message: 'Task created', id };
  }

  findAll() {
    return this.tasks;
  }

  findOne(id: string) {
    return this.tasks.filter((t) => t.id == id);
  }

  update(id: string, updateTaskDto: UpdateTaskDto): IdResponse {
    this.tasks = this.tasks.map((t) =>
      t.id === id ? { ...t, ...updateTaskDto } : t,
    );
    return { message: 'Task updated', id };
  }

  remove(id: string): IdResponse {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    return { message: 'Task deleted', id };
  }
}
