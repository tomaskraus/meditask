import { Task } from '../schemas/task.schema';
import { OmitType } from '@nestjs/mapped-types';

export class CreateTaskDto extends OmitType(Task, ['id']) {}
