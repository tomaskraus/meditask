import { Mongoose } from 'mongoose';
import { TaskRunSchema } from './schemas/task-run.schema';

export const taskRunsProviders = [
  {
    provide: 'TASK_RUN_MODEL',
    useFactory: (mongoose: Mongoose) =>
      mongoose.model('TaskRun', TaskRunSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
