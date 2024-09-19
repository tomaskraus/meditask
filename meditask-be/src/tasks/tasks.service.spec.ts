import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';

//https://stackoverflow.com/questions/56703570/unable-to-run-tests-because-nest-cannot-find-a-module
import { DatabaseModule } from './../database/database.module';
import { tasksProviders } from './tasks.providers';
import { TaskRunsModule } from '../task-runs/task-runs.module';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule, TaskRunsModule],
      providers: [TasksService, ...tasksProviders],
    }).compile();

    service = module.get<TasksService>(TasksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
