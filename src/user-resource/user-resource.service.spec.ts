import { Test, TestingModule } from '@nestjs/testing';
import { UserResourceService } from './user-resource.service';

describe('UserResourceService', () => {
  let service: UserResourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserResourceService],
    }).compile();

    service = module.get<UserResourceService>(UserResourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
