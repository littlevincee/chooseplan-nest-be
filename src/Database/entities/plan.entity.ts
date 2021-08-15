import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PlansToFeatures } from './plans-features.entity';

@Entity()
export class Plan {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public code: string;

  @Column()
  public name: string;

  @Column()
  public fee: number;

  @Column()
  public feePeriod: string;

  @OneToMany(() => PlansToFeatures, (plansToFeatures) => plansToFeatures.plan)
  public plansToFeatures!: PlansToFeatures[];
}
