import { Migration } from '@mikro-orm/migrations';

export class Migration20220610191415 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "users" ("uuid" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "username" varchar(255) not null, "email" varchar(255) not null, "password" varchar(255) not null);');
    this.addSql('alter table "users" add constraint "users_username_unique" unique ("username");');
    this.addSql('alter table "users" add constraint "users_email_unique" unique ("email");');
    this.addSql('alter table "users" add constraint "users_pkey" primary key ("uuid");');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "users" cascade;');
  }

}
