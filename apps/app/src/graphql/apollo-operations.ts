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

/** games */
export type GameEntity = {
	__typename?: 'GameEntity';
	createdAt: Scalars['DateTime']['output'];
	expiresOn: Scalars['DateTime']['output'];
	participants: Array<UserEntity>;
	status: GameStatus;
	tableCards: Array<Scalars['String']['output']>;
	updatedAt: Scalars['DateTime']['output'];
	uuid: Scalars['ID']['output'];
};

export enum GameStatus {
	Completed = 'Completed',
	Expired = 'Expired',
	InProgress = 'InProgress',
	WaitingOpponents = 'WaitingOpponents',
}

export type Mutation = {
	__typename?: 'Mutation';
	newGame: GameEntity;
};

export type Query = {
	__typename?: 'Query';
	getUsers: Array<UserEntity>;
	validateUserConstraints: Scalars['Boolean']['output'];
};

export type QueryvalidateUserConstraintsArgs = {
	input: ValidateUserConstraintsInput;
};

export type Subscription = {
	__typename?: 'Subscription';
	getManySubscription?: Maybe<Scalars['String']['output']>;
};

/** user */
export type UserEntity = {
	__typename?: 'UserEntity';
	createdAt: Scalars['DateTime']['output'];
	email?: Maybe<Scalars['String']['output']>;
	games: Array<GameEntity>;
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

export type NewGameMutationVariables = Exact<{ [key: string]: never }>;

export type NewGameMutation = {
	__typename?: 'Mutation';
	newGame: {
		__typename?: 'GameEntity';
		uuid: string;
		status: GameStatus;
		tableCards: Array<string>;
		expiresOn: Date;
		createdAt: Date;
		updatedAt: Date;
		participants: Array<{ __typename?: 'UserEntity'; uuid: string; username: string }>;
	};
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
	__typename?: 'Query';
	getUsers: Array<{
		__typename?: 'UserEntity';
		uuid: string;
		username: string;
		email?: string | null;
		role: UserRole;
		createdAt: Date;
		updatedAt: Date;
	}>;
};

export const NewGameDocument = gql`
	mutation NewGame {
		newGame {
			uuid
			participants {
				uuid
				username
			}
			status
			tableCards
			expiresOn
			createdAt
			updatedAt
		}
	}
`;

@Injectable({
	providedIn: 'root',
})
export class NewGameGQL extends Apollo.Mutation<NewGameMutation, NewGameMutationVariables> {
	override document = NewGameDocument;

	constructor(apollo: Apollo.Apollo) {
		super(apollo);
	}
}

export const GetUsersDocument = gql`
	query GetUsers {
		getUsers {
			uuid
			username
			email
			role
			createdAt
			updatedAt
		}
	}
`;

@Injectable({
	providedIn: 'root',
})
export class GetUsersGQL extends Apollo.Query<GetUsersQuery, GetUsersQueryVariables> {
	override document = GetUsersDocument;

	constructor(apollo: Apollo.Apollo) {
		super(apollo);
	}
}
