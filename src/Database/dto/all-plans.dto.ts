import { ApiProperty } from '@nestjs/swagger';
import { PlanDto } from './Plan.dto';

export class AllPlansDto {
  @ApiProperty({ example: 'GEN', description: 'The feature code' })
  featureCode: string;
  @ApiProperty({ example: 'General', description: 'The feature name' })
  featureName: string;
  @ApiProperty({ type: [PlanDto] })
  plan: PlanDto[];
}
