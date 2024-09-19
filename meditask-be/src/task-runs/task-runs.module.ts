import { Module } from '@nestjs/common';
import { TaskRunsService } from './task-runs.service';
import { TaskRunController } from './task-runs.controller';
import { taskRunsProviders } from './task-runs.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TaskRunController],
  providers: [TaskRunsService, ...taskRunsProviders],
  exports: [TaskRunsService],
})
export class TaskRunsModule {}
