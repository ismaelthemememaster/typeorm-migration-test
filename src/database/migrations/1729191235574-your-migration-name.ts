import { MigrationInterface, QueryRunner } from "typeorm";

export class yourMigrationName1729191235574 implements MigrationInterface {
    name = 'yourMigrationName1729191235574'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("username" character varying NOT NULL, "fullname" character varying NOT NULL, "email" character varying NOT NULL, "usertype" character varying NOT NULL, "sheeplevel" character varying NOT NULL, CONSTRAINT "PK_78a916df40e02a9deb1c4b75edb" PRIMARY KEY ("username"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
