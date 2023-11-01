import { MigrationInterface, QueryRunner } from "typeorm";

export class default1698876279787 implements MigrationInterface {
    name = 'default1698876279787'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`company\` ADD \`NomedaEmpresa\` text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`company\` DROP COLUMN \`NomedaEmpresa\``);
    }

}
