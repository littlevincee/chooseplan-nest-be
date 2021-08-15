import { IsString } from 'class-validator';

export class FeatureDto {
  @IsString()
  readonly code: string;
}
