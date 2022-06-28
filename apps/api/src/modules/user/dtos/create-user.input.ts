import { Field, InputType } from '@nestjs/graphql'
import { IsDefined, IsEmail, IsOptional, IsString } from 'class-validator'

@InputType()
export class CreateUserInput {
  @IsDefined()
  @IsString()
  @Field()
  public username: string

  @IsDefined()
  @IsString()
  @Field()
  public password: string

	@IsOptional()
  @IsEmail()
  @Field({ nullable: true })
  public email?: string
}
