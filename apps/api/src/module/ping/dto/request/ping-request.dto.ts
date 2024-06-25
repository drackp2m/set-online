import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class PingRequestDto {
	@IsNumber()
	@IsNotEmpty()
	@Field({ nullable: true })
	pingValue?: number;
}
