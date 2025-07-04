import { Test, TestingModule } from '@nestjs/testing';
import { TaskResourceController } from './task-resource.controller';
import { TaskResourceService } from './task-resource.service';

describe('TaskResourceController', () => {
  let controller: TaskResourceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskResourceController],
      providers: [TaskResourceService],
    }).compile();

    controller = module.get<TaskResourceController>(TaskResourceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
