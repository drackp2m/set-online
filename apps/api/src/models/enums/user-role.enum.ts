import { registerEnumType } from '@nestjs/graphql';

export enum EUserRole {
	Admin = 'admin',
	Registered = 'registered',
	Guest = 'guest',
}

registerEnumType(EUserRole, {
	name: 'EUserRole'
})
