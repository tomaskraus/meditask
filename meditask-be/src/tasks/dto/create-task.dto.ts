import { Task } from '../interfaces/task.interface';

export class CreateTaskDto implements Task {
  readonly caption: string;
  readonly description: string; // a long description of the task
}
