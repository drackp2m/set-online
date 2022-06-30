import { registerEnumType } from '@nestjs/graphql';

export enum UserRoleEnum {
	Admin = 'admin',
	Registered = 'registered',
	Guest = 'guest',
}

registerEnumType(UserRoleEnum, {
	name: 'UserRoleEnum'
})
