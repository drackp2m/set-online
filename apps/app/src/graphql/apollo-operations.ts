import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

export type Maybe<T> = T | null;

export type InputMaybe<T> = Maybe<T>;

export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };

export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };

export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
	[_ in K]?: never;
};

export type Incremental<T> =
	| T
	| { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	/** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
	DateTime: { input: Date; output: Date };
};

export type CreateUserInput = {
	email?: InputMaybe<Scalars['String']['input']>;
	password: Scalars['String']['input'];
	username: Scalars['String']['input'];
};

export type LoginInput = {
	password: Scalars['String']['input'];
	username: Scalars['String']['input'];
};

export type LoginOutput = {
	__typename?: 'LoginOutput';
	message: Scalars['String']['output'];
	result: Scalars['Boolean']['output'];
};

export type Mutation = {
	__typename?: 'Mutation';
	createUser: UserEntity;
};

export type MutationcreateUserArgs = {
	input: CreateUserInput;
};

export type Query = {
	__typename?: 'Query';
	getUsers: Array<UserEntity>;
	login: LoginOutput;
	validateUserConstraints: Scalars['Boolean']['output'];
};

export type QueryloginArgs = {
	input: LoginInput;
};

export type QueryvalidateUserConstraintsArgs = {
	input: ValidateUserConstraintsInput;
};

/** user */
export type UserEntity = {
	__typename?: 'UserEntity';
	createdAt: Scalars['DateTime']['output'];
	email?: Maybe<Scalars['String']['output']>;
	role: UserRole;
	updatedAt: Scalars['DateTime']['output'];
	username: Scalars['String']['output'];
	uuid: Scalars['ID']['output'];
};

export enum UserRole {
	Admin = 'Admin',
	Guest = 'Guest',
	Registered = 'Registered',
}

export type ValidateUserConstraintsInput = {
	email?: InputMaybe<Scalars['String']['input']>;
	username?: InputMaybe<Scalars['String']['input']>;
};

export interface PossibleTypesResultData {
	possibleTypes: {
		[key: string]: string[];
	};
}
const result: PossibleTypesResultData = {
	possibleTypes: {},
};

export default result;

export type LoginQueryVariables = Exact<{
	input: LoginInput;
}>;

export type LoginQuery = {
	__typename?: 'Query';
	login: { __typename?: 'LoginOutput'; result: boolean; message: string };
};

export const LoginDocument = gql`
	query Login($input: LoginInput!) {
		login(input: $input) {
			result
			message
		}
	}
`;

@Injectable({
	providedIn: 'root',
})
export class LoginGQL extends Apollo.Query<LoginQuery, LoginQueryVariables> {
	override document = LoginDocument;

	constructor(apollo: Apollo.Apollo) {
		super(apollo);
	}
}
