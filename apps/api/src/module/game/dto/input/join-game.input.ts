import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class JoinGameInput {
	@IsString()
	@IsNotEmpty()
	@Field()
	gameUuid: string;
}
