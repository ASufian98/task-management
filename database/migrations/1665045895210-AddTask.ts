import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTask1665045895210 implements MigrationInterface {
    name = 'AddTask1665045895210'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`task\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(64) NOT NULL, \`description\` varchar(1024) NULL, \`status\` int NOT NULL DEFAULT '0', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`task\``);
    }

}
