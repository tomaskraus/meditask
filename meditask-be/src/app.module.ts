import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TaskRunsModule } from './task-runs/task-runs.module';

@Module({
  imports: [TasksModule, TaskRunsModule],
  // imports: [TasksModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
