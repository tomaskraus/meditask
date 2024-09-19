import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { tasksProviders } from './tasks.providers';
import { DatabaseModule } from '../database/database.module';
import { TaskRunsModule } from '../task-runs/task-runs.module';

@Module({
  imports: [DatabaseModule, TaskRunsModule],
  controllers: [TasksController],
  providers: [TasksService, ...tasksProviders],
})
export class TasksModule {}
