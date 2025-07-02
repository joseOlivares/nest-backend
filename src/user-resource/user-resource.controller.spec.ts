import { Test, TestingModule } from '@nestjs/testing';
import { UserResourceController } from './user-resource.controller';
import { UserResourceService } from './user-resource.service';

describe('UserResourceController', () => {
  let controller: UserResourceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserResourceController],
      providers: [UserResourceService],
    }).compile();

    controller = module.get<UserResourceController>(UserResourceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
