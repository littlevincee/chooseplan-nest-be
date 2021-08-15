import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  HealthCheck,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private healthCheck: HealthCheckService,
    private dbHealth: TypeOrmHealthIndicator,
  ) {}

  @Get('db')
  @HealthCheck()
  check() {
    return this.healthCheck.check([
      async () => this.dbHealth.pingCheck('typeorm'),
    ]);
  }
}
