// import { ApiProperty } from '@nestjs/swagger';

import { Task } from '../schemas/task.schema';
import { OmitType } from '@nestjs/swagger';

export class CreateTaskDto extends OmitType(Task, ['id']) {}
