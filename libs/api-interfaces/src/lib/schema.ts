
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class LoginInput {
    username: string;
    password: string;
}

export class CreateUserInput {
    username: string;
    password: string;
    email?: Nullable<string>;
}

export class User {
    uuid: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    username: string;
    email?: Nullable<string>;
}

export class TokenModel {
    token: string;
    expiresIn: string;
}

export abstract class IQuery {
    abstract getUsers(): User[] | Promise<User[]>;
}

export abstract class IMutation {
    abstract login(input: LoginInput): TokenModel | Promise<TokenModel>;

    abstract createUser(input: CreateUserInput): User | Promise<User>;
}

export type DateTime = any;
type Nullable<T> = T | null;
