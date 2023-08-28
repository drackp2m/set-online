import { Migration } from '@mikro-orm/migrations';

export class Migration20230828204019 extends Migration {
	async up(): Promise<void> {
		this.addSql(
			'create table "game" ("uuid" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "table_cards" text[] not null, "deck_cards" text[] not null, "status" text check ("status" in (\'waiting_opponents\', \'in_progress\', \'completed\', \'expired\')) not null default \'waiting_opponents\', "expires_on" timestamptz(0) not null, constraint "game_pkey" primary key ("uuid"));',
		);

		this.addSql(
			'create table "user" ("uuid" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "username" varchar(255) not null, "password" varchar(255) not null, "email" varchar(255) null, "role" text check ("role" in (\'admin\', \'registered\', \'guest\')) not null default \'registered\', constraint "user_pkey" primary key ("uuid"));',
		);
		this.addSql('alter table "user" add constraint "user_username_unique" unique ("username");');
		this.addSql('alter table "user" add constraint "user_email_unique" unique ("email");');

		this.addSql(
			'create table "game_participant" ("game_uuid" varchar(255) not null, "user_uuid" varchar(255) not null, "created_at" timestamptz(0) not null default CURRENT_TIMESTAMP, constraint "game_participant_pkey" primary key ("game_uuid", "user_uuid"));',
		);

		this.addSql(
			'alter table "game_participant" add constraint "game_participant_game_uuid_foreign" foreign key ("game_uuid") references "game" ("uuid") on update cascade;',
		);
		this.addSql(
			'alter table "game_participant" add constraint "game_participant_user_uuid_foreign" foreign key ("user_uuid") references "user" ("uuid") on update cascade;',
		);
	}

	async down(): Promise<void> {
		this.addSql(
			'alter table "game_participant" drop constraint "game_participant_game_uuid_foreign";',
		);

		this.addSql(
			'alter table "game_participant" drop constraint "game_participant_user_uuid_foreign";',
		);

		this.addSql('drop table if exists "game" cascade;');

		this.addSql('drop table if exists "user" cascade;');

		this.addSql('drop table if exists "game_participant" cascade;');
	}
}
