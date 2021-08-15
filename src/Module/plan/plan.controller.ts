import { Body, Controller, Post } from '@nestjs/common';
import { PlanService } from './plan.service';
import { CreatePlanDto } from 'src/Database/dto/createPlan.dto';

@Controller('/api/plan')
export class PlanController {
  constructor(private readonly planService: PlanService) {}

  @Post()
  async create(@Body() createPlanDto: CreatePlanDto) {
    return this.planService.create(createPlanDto);
  }
}
