import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
//https://stackoverflow.com/questions/56703570/unable-to-run-tests-because-nest-cannot-find-a-module
import { DatabaseModule } from '../database/database.module';
import { tasksProviders } from './tasks.providers';
import { TaskRunsModule } from '../task-runs/task-runs.module';

describe('TasksController', () => {
  let controller: TasksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule, TaskRunsModule],
      controllers: [TasksController],
      providers: [TasksService, ...tasksProviders],
    }).compile();

    controller = module.get<TasksController>(TasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
