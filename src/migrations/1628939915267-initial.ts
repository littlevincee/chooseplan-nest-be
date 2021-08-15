import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1628939915267 implements MigrationInterface {
    name = 'initial1628939915267'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`ChoosePlans\`.\`plan\` (\`id\` int NOT NULL AUTO_INCREMENT, \`code\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`fee\` int NOT NULL, \`feePeriod\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`ChoosePlans\`.\`plans_to_features\` (\`id\` int NOT NULL AUTO_INCREMENT, \`planId\` int NOT NULL, \`featureId\` int NOT NULL, \`isActive\` tinyint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`ChoosePlans\`.\`feature\` (\`id\` int NOT NULL AUTO_INCREMENT, \`code\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`ChoosePlans\`.\`plans_to_features\` ADD CONSTRAINT \`FK_d202e99726afed94c8ae53437da\` FOREIGN KEY (\`planId\`) REFERENCES \`ChoosePlans\`.\`plan\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ChoosePlans\`.\`plans_to_features\` ADD CONSTRAINT \`FK_6b583e81f590140d7d3944279e5\` FOREIGN KEY (\`featureId\`) REFERENCES \`ChoosePlans\`.\`feature\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ChoosePlans\`.\`plans_to_features\` DROP FOREIGN KEY \`FK_6b583e81f590140d7d3944279e5\``);
        await queryRunner.query(`ALTER TABLE \`ChoosePlans\`.\`plans_to_features\` DROP FOREIGN KEY \`FK_d202e99726afed94c8ae53437da\``);
        await queryRunner.query(`DROP TABLE \`ChoosePlans\`.\`feature\``);
        await queryRunner.query(`DROP TABLE \`ChoosePlans\`.\`plans_to_features\``);
        await queryRunner.query(`DROP TABLE \`ChoosePlans\`.\`plan\``);
    }

}
