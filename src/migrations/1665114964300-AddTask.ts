import {MigrationInterface, QueryRunner} from "typeorm";

export class AddTask1665114964300 implements MigrationInterface {
    name = 'AddTask1665114964300'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`task\` CHANGE \`description\` \`description\` varchar(1024) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`task\` CHANGE \`description\` \`description\` varchar(1024) NULL DEFAULT 'NULL'`);
    }

}
