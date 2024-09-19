import { Model } from 'mongoose';
import { TaskRun } from './schemas/task-run.schema';
import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskRunDto } from './dto/create-task-run.dto';
import { AffectTaskIdResponse } from './interfaces/affect-task-id-response.interface';
import { CountResponse } from './interfaces/count-response.interface';
import { Task } from '../tasks/schemas/task.schema';

@Injectable()
export class TaskRunsService {
  constructor(@Inject('TASK_RUN_MODEL') private taskRunModel: Model<TaskRun>) {}

  async insertMany(taskRunDtos: CreateTaskRunDto[]): Promise<CountResponse> {
    const res = await this.taskRunModel.insertMany(taskRunDtos);
    return { message: 'TaskRun created', count: res.length };
  }

  findAll() {
    return this.taskRunModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} taskRun`;
  }

  generateFromTask(task: Task): CreateTaskRunDto[] {
    const taskRuns = [1, 2, 3].map(
      (i): CreateTaskRunDto => ({
        taskId: task.id,
        caption: task.caption,
        description: `${task.description} #${i}`,
        eventTime: new Date(),
        notificationMinutes: task.notificationMinutes,
        fulfilled: false,
      }),
    );
    return taskRuns;
  }

  async removeByTaskId(taskId: string): Promise<AffectTaskIdResponse> {
    const res = await this.taskRunModel.deleteMany({ taskId });
    return {
      message: 'Task runs deleted',
      count: res.deletedCount,
      taskId,
    };
  }
}
