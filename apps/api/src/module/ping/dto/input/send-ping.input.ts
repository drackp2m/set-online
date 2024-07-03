import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class SendPingInput {
	@IsNumber()
	@IsNotEmpty()
	@Field()
	pingValue!: number;
}
