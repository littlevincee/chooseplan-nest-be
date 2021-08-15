import { MigrationInterface, QueryRunner } from 'typeorm';

export class seed1628939930925 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO \`ChoosePlans\`.\`plan\` (code, name, fee, feePeriod) VALUES
      ('STAND', 'Standard Plan', 0, 'Month'),
      ('GOLD', 'Gold Plan', 188, 'Month'),
      ('PREM', 'Premium Plan', 388, 'month') `,
    );

    await queryRunner.query(
      `INSERT INTO \`ChoosePlans\`.\`feature\` (code, name) VALUES
      ('GEN', 'General'),
      ('SPEC', 'Specialist'),
      ('PHYS', 'Physiotherapy'),
      ('OPHT', 'Ophthalmologists'),
      ('CARD', 'Cardiologists') `,
    );

    await queryRunner.query(
      `INSERT INTO \`ChoosePlans\`.\`plans_to_features\` (planId, featureId, IsActive) VALUES
      (1, 1, 1),
      (1, 2, 0),
      (1, 3, 0),
      (1, 4, 0),
      (1, 5, 0),

      (2, 1, 1),
      (2, 2, 1),
      (2, 3, 1),
      (2, 4, 0),
      (2, 5, 0),

      (3, 1, 1),
      (3, 2, 1),
      (3, 3, 1),
      (3, 4, 1),
      (3, 5, 1) `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `TRUNCATE TABLE \`ChoosePlans\`.\`plans_features\``,
    );
    await queryRunner.query(`TRUNCATE TABLE \`ChoosePlans\`.\`plan\``);
    await queryRunner.query(`TRUNCATE TABLE \`ChoosePlans\`.\`feature\``);
  }
}
