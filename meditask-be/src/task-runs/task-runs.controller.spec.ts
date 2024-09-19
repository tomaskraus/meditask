import { Test, TestingModule } from '@nestjs/testing';

//https://stackoverflow.com/questions/56703570/unable-to-run-tests-because-nest-cannot-find-a-module
import { DatabaseModule } from './../database/database.module';
import { TaskRunController } from './task-runs.controller';
import { TaskRunsService } from './task-runs.service';
import { taskRunsProviders } from './task-runs.providers';

describe('TaskRunController', () => {
  let controller: TaskRunController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [TaskRunController],
      providers: [TaskRunsService, ...taskRunsProviders],
    }).compile();

    controller = module.get<TaskRunController>(TaskRunController);
  });

  it('should be defined', async () => {
    expect(controller).toBeDefined();
  });
});
