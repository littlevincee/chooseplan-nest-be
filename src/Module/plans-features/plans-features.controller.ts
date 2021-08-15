import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AllPlansDto } from '../../Database/dto/all-plans.dto';
import { PlansFeaturesService } from './plans-features.service';

@ApiTags('Plans-Features')
@Controller('/api/plans-features')
export class PlansFeaturesController {
  constructor(private readonly plansFeaturesService: PlansFeaturesService) {}

  @Get('all')
  @ApiResponse({
    status: 200,
    description: 'Get all plans and features information',
    type: AllPlansDto,
  })
  findAll(): Promise<AllPlansDto[]> {
    return this.plansFeaturesService.findAll();
  }
}
