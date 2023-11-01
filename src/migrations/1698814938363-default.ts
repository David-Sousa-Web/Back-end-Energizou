import { MigrationInterface, QueryRunner } from "typeorm";

export class default1698814938363 implements MigrationInterface {
    name = 'default1698814938363'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`company\` (\`Id\` varchar(36) NOT NULL, \`NomedoCliente\` text NOT NULL, \`Senha\` text NOT NULL, \`CNPJ\` text NOT NULL, \`CEP\` text NOT NULL, \`Endereco\` text NOT NULL, \`Numero\` int NOT NULL, \`Telefone\` text NOT NULL, \`Email\` text NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`company\``);
    }

}
