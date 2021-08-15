import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlansToFeatures } from 'src/Database/entities/plans-features.entity';
import { AllPlansDto } from '../../Database/dto/all-plans.dto';

@Injectable()
export class PlansFeaturesService {
  constructor(
    @InjectRepository(PlansToFeatures)
    private readonly plansToFeaturesRepo: Repository<PlansToFeatures>,
  ) {}

  async findAll(): Promise<AllPlansDto[]> {
    const allPlans = await this.plansToFeaturesRepo.find({
      relations: ['plan', 'feature'],
    });
    return this.mapData(allPlans);
  }

  private mapData = (obj: PlansToFeatures[]) => {
    const allPlansDto: AllPlansDto[] = [];
    obj.forEach((item) => {
      const isExist = allPlansDto.find(
        (e) => e.featureCode === item.feature.code,
      );
      if (isExist) {
        const idx = allPlansDto.findIndex(
          (e) => e.featureCode === item.feature.code,
        );
        Object.assign(
          allPlansDto,
          allPlansDto[idx].plan.push({
            planCode: item.plan.code,
            planName: item.plan.name,
            fee: item.plan.fee,
            feePeriod: item.plan.feePeriod,
            isActive: item.isActive,
          }),
        );
      } else {
        allPlansDto.push({
          featureCode: item.feature.code,
          featureName: item.feature.name,
          plan: [
            {
              planCode: item.plan.code,
              planName: item.plan.name,
              fee: item.plan.fee,
              feePeriod: item.plan.feePeriod,
              isActive: item.isActive,
            },
          ],
        });
      }
    });
    return allPlansDto;
  };
}
