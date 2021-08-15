import { ApiProperty } from '@nestjs/swagger';

export class PlanDto {
  @ApiProperty({ example: 'STAND', description: 'The plan code' })
  planCode: string;
  @ApiProperty({ example: 'Standard Plan', description: 'The plan name' })
  planName: string;
  @ApiProperty({ example: '388', description: 'The cost of the plan' })
  fee: number;
  @ApiProperty({
    example: 'month',
    description: 'The period of the cost of the plan',
  })
  feePeriod: string;
  @ApiProperty({
    example: 'true',
    description: 'Is the fee of the plan active',
  })
  isActive: boolean;
}
