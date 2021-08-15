import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plan } from 'src/Database/entities/plan.entity';
import { Feature } from 'src/Database/entities/feature.entity';
import { PlansToFeatures } from 'src/Database/entities/plans-features.entity';
import { PlanController } from './plan.controller';
import { PlanService } from './plan.service';

@Module({
  imports: [TypeOrmModule.forFeature([Plan, Feature, PlansToFeatures])],
  controllers: [PlanController],
  providers: [PlanService],
})
export class PlanModule {}
