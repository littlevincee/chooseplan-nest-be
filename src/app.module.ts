import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { HealthModule } from './Module/health/health.module';
import { Connection } from 'typeorm';
import { PlansFeaturesModule } from './Module/plans-features/plans-features.module';
import { PlanModule } from './Module/plan/plan.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HealthModule,
    TypeOrmModule.forRoot({}),
    PlansFeaturesModule,
    PlanModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
