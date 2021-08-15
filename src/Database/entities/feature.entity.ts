import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PlansToFeatures } from './plans-features.entity';

@Entity()
export class Feature {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public code: string;

  @Column()
  public name: string;

  @OneToMany(
    () => PlansToFeatures,
    (plansToFeatures) => plansToFeatures.feature,
  )
  public plansToFeatures!: PlansToFeatures[];
}
