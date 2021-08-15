import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlansToFeatures } from 'src/Database/entities/plans-features.entity';
import { PlansFeaturesController } from './plans-features.controller';
import { PlansFeaturesService } from './plans-features.service';

@Module({
  imports: [TypeOrmModule.forFeature([PlansToFeatures])],
  controllers: [PlansFeaturesController],
  providers: [PlansFeaturesService],
})
export class PlansFeaturesModule {}
