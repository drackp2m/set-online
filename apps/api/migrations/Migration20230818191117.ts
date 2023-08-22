import { Migration } from '@mikro-orm/migrations';

export class Migration20230818191117 extends Migration {
	async up(): Promise<void> {
		this.addSql(
			'create table "games" ("uuid" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "table_cards" text[] not null, "deck_cards" text[] not null, "status" text check ("status" in (\'waiting_opponents\', \'in_progress\', \'completed\', \'expired\')) not null default \'waiting_opponents\', "expires_on" timestamptz(0) not null, constraint "games_pkey" primary key ("uuid"));',
		);

		this.addSql(
			'create table "games_participants" ("game_uuid" varchar(255) not null, "user_uuid" varchar(255) not null, constraint "games_participants_pkey" primary key ("game_uuid", "user_uuid"));',
		);

		this.addSql(
			'alter table "games_participants" add constraint "games_participants_game_uuid_foreign" foreign key ("game_uuid") references "games" ("uuid") on update cascade on delete cascade;',
		);
		this.addSql(
			'alter table "games_participants" add constraint "games_participants_user_uuid_foreign" foreign key ("user_uuid") references "users" ("uuid") on update cascade on delete cascade;',
		);
	}

	async down(): Promise<void> {
		this.addSql(
			'alter table "games_participants" drop constraint "games_participants_game_uuid_foreign";',
		);

		this.addSql('drop table if exists "games" cascade;');

		this.addSql('drop table if exists "games_participants" cascade;');
	}
}
