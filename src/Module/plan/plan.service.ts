import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In, getConnection } from 'typeorm';
import { CreatePlanDto } from 'src/Database/dto/createPlan.dto';
import { Plan } from 'src/Database/entities/plan.entity';
import { Feature } from 'src/Database/entities/feature.entity';
import { PlansToFeatures } from 'src/Database/entities/plans-features.entity';

@Injectable()
export class PlanService {
  constructor(
    @InjectRepository(Plan)
    private readonly planRepo: Repository<Plan>,
    @InjectRepository(Feature)
    private readonly featureRepo: Repository<Feature>,
    @InjectRepository(PlansToFeatures)
    private readonly plansToFeaturesRepo: Repository<PlansToFeatures>,
  ) {}

  async create(plan: CreatePlanDto) {
    const planResult = await this.planRepo.save(plan);

    const featureCode = [];
    if (Array.isArray(plan.features)) {
      plan.features.forEach((item) => {
        featureCode.push(item.code);
      });

      const featureResult = await this.featureRepo.find({
        code: In(featureCode),
      });

      if (planResult.id && featureResult.length > 0) {
        const plansToFeatures: PlansToFeatures[] = [];

        featureResult.forEach((item) => {
          const data = new PlansToFeatures();
          data.planId = planResult.id;
          data.featureId = item.id;
          data.isActive = true;
          plansToFeatures.push(data);
        });
        await this.plansToFeaturesRepo.save(
          this.plansToFeaturesRepo.create(plansToFeatures),
        );
      }
    }
  }
}
