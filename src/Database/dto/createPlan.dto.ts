import { IsArray, IsInt, IsString } from 'class-validator';
import { FeatureDto } from './feature.dto';

export class CreatePlanDto {
  @IsString()
  readonly code: string;

  @IsString()
  readonly name: string;

  @IsInt()
  readonly fee: number;

  @IsString()
  readonly feePeriod: string;

  @IsArray()
  readonly features: FeatureDto[];
}
