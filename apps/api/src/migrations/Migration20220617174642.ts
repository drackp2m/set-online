import { Migration } from '@mikro-orm/migrations';

export class Migration20220617174642 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "users" add column "uuid" varchar(255) not null, add column "created_at" timestamptz(0) not null, add column "updated_at" timestamptz(0) not null;');
    this.addSql('alter table "users" drop constraint "users_pkey";');
    this.addSql('alter table "users" drop column "id";');
    this.addSql('alter table "users" add constraint "users_pkey" primary key ("uuid");');
  }

  async down(): Promise<void> {
    this.addSql('alter table "users" add column "id" serial;');
    this.addSql('alter table "users" drop constraint "users_pkey";');
    this.addSql('alter table "users" drop column "uuid";');
    this.addSql('alter table "users" drop column "created_at";');
    this.addSql('alter table "users" drop column "updated_at";');
    this.addSql('alter table "users" add constraint "users_pkey" primary key ("id");');
  }

}
