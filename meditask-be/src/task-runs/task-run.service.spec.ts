import { Test, TestingModule } from '@nestjs/testing';
import { TaskRunsService } from './task-runs.service';

describe('TaskRunService', () => {
  let service: TaskRunsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskRunsService],
    }).compile();

    service = module.get<TaskRunsService>(TaskRunsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
