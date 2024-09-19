import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
// import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './schemas/task.schema';
import { UpdateTaskDto } from './dto/update-task.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { IdResponse } from './interfaces/id-response.interface';
import { AffectOneItemResponse } from './interfaces/affect-one-item-response.interface';

//https://stackoverflow.com/questions/56703570/unable-to-run-tests-because-nest-cannot-find-a-module
import { TaskRunsService } from '../task-runs/task-runs.service';

@Injectable()
export class TasksService {
  constructor(
    @Inject('TASK_MODEL') private taskModel: Model<Task>,
    private readonly taskRunsService: TaskRunsService,
  ) {}

  async create(task: CreateTaskDto): Promise<IdResponse> {
    const res = await this.taskModel.create(task);
    await res.save();
    const taskCreated = { ...task, id: res.id };
    await this.taskRunsService.insertMany(
      this.taskRunsService.generateFromTask(taskCreated),
    );
    return { message: 'Task created', id: res.id };
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async findOne(id: string): Promise<Task> {
    return this.taskModel.findOne({ _id: id }).exec();
  }

  async update(
    id: string,
    updateTaskDto: UpdateTaskDto,
  ): Promise<AffectOneItemResponse> {
    const res = await this.taskModel.updateOne({ _id: id }, updateTaskDto);
    return {
      message: 'Task updated',
      count: res.modifiedCount,
      // TODO: refactor id retrieval
      id,
    };
  }

  async remove(id: string): Promise<AffectOneItemResponse> {
    const res = await this.taskModel.deleteOne({ _id: id });
    return {
      message: 'Task deleted',
      count: res.deletedCount,
      // TODO: refactor id retrieval
      id,
    };
  }
}
