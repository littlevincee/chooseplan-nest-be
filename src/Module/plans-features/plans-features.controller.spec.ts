import { Test, TestingModule } from '@nestjs/testing';
import { PlansFeaturesController } from './plans-features.controller';

describe('PlansFeaturesController', () => {
  let controller: PlansFeaturesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlansFeaturesController],
    }).compile();

    controller = module.get<PlansFeaturesController>(PlansFeaturesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
