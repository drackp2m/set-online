import { registerEnumType } from '@nestjs/graphql';

export enum UserRole {
	Admin = 'admin',
	Registered = 'registered',
	Guest = 'guest',
}

registerEnumType(UserRole, {
	name: 'UserRole',
});
