import { Migration } from '@mikro-orm/migrations';

export class Migration20220630111809 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "users" add column "role" text check ("role" in (\'admin\', \'registered\', \'guest\')) not null default \'registered\';');
  }

  async down(): Promise<void> {
    this.addSql('alter table "users" drop column "role";');
  }

}
