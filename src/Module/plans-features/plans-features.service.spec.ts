import { Test, TestingModule } from '@nestjs/testing';
import { PlansFeaturesService } from './plans-features.service';

describe('PlansFeaturesService', () => {
  let service: PlansFeaturesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlansFeaturesService],
    }).compile();

    service = module.get<PlansFeaturesService>(PlansFeaturesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
