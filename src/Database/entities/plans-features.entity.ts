import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Plan } from './plan.entity';
import { Feature } from './feature.entity';

@Entity()
export class PlansToFeatures {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public planId: number;

  @Column()
  public featureId: number;

  @Column()
  public isActive: boolean;

  @ManyToOne(() => Plan, (plan) => plan.plansToFeatures)
  public plan: Plan;

  @ManyToOne(() => Feature, (feature) => feature.plansToFeatures)
  public feature: Feature;
}
