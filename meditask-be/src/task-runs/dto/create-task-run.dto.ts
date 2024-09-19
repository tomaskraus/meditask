export class CreateTaskRunDto {}

import { TaskRun } from '../schemas/task-run.schema';
import { OmitType } from '@nestjs/swagger';

export class CreateTaskDto extends OmitType(TaskRun, ['id']) {}
