import { Migration } from '@mikro-orm/migrations';

export class Migration20220628175434 extends Migration {
	async up(): Promise<void> {
		this.addSql(
			'alter table "users" alter column "email" type varchar(255) using ("email"::varchar(255));',
		);
		this.addSql('alter table "users" alter column "email" drop not null;');
	}

	async down(): Promise<void> {
		this.addSql(
			'alter table "users" alter column "email" type varchar(255) using ("email"::varchar(255));',
		);
		this.addSql('alter table "users" alter column "email" set not null;');
	}
}
