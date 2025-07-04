import { Test, TestingModule } from '@nestjs/testing';
import { TaskResourceService } from './task-resource.service';

describe('TaskResourceService', () => {
  let service: TaskResourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskResourceService],
    }).compile();

    service = module.get<TaskResourceService>(TaskResourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
