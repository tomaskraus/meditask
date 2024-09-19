import { Test, TestingModule } from '@nestjs/testing';
import { TaskRunsService } from './task-runs.service';

//https://stackoverflow.com/questions/56703570/unable-to-run-tests-because-nest-cannot-find-a-module
import { DatabaseModule } from './../database/database.module';
import { taskRunsProviders } from './task-runs.providers';

describe('TaskRunService', () => {
  let service: TaskRunsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [TaskRunsService, ...taskRunsProviders],
    }).compile();

    service = module.get<TaskRunsService>(TaskRunsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
