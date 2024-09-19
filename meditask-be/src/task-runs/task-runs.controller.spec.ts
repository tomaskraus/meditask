import { Test, TestingModule } from '@nestjs/testing';
import { TaskRunController } from './task-runs.controller';
import { TaskRunsService } from './task-runs.service';

describe('TaskRunController', () => {
  let controller: TaskRunController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskRunController],
      providers: [TaskRunsService],
    }).compile();

    controller = module.get<TaskRunController>(TaskRunController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
