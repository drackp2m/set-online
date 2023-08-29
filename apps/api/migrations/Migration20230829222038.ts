import { Migration } from '@mikro-orm/migrations';

export class Migration20230829222038 extends Migration {
	async up(): Promise<void> {
		this.addSql(
			'alter table "game_participant" drop constraint "game_participant_game_uuid_foreign";',
		);
		this.addSql(
			'alter table "game_participant" drop constraint "game_participant_user_uuid_foreign";',
		);

		this.addSql(
			'alter table "game_participant" add constraint "game_participant_game_uuid_foreign" foreign key ("game_uuid") references "game" ("uuid") on update cascade on delete cascade;',
		);
		this.addSql(
			'alter table "game_participant" add constraint "game_participant_user_uuid_foreign" foreign key ("user_uuid") references "user" ("uuid") on update cascade on delete cascade;',
		);
	}

	async down(): Promise<void> {
		this.addSql(
			'alter table "game_participant" drop constraint "game_participant_game_uuid_foreign";',
		);
		this.addSql(
			'alter table "game_participant" drop constraint "game_participant_user_uuid_foreign";',
		);

		this.addSql(
			'alter table "game_participant" add constraint "game_participant_game_uuid_foreign" foreign key ("game_uuid") references "game" ("uuid") on update cascade on delete no action;',
		);
		this.addSql(
			'alter table "game_participant" add constraint "game_participant_user_uuid_foreign" foreign key ("user_uuid") references "user" ("uuid") on update cascade on delete no action;',
		);
	}
}
