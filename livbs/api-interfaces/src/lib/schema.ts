
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum UserRoleEnum {
    Admin = "Admin",
    Registered = "Registered",
    Guest = "Guest"
}

export interface LoginInput {
    username: string;
    password: string;
}

export interface CreateUserInput {
    username: string;
    password: string;
    email?: Nullable<string>;
}

export interface ValidateUserConstraintsInput {
    username?: Nullable<string>;
    email?: Nullable<string>;
}

export interface TokenModel {
    token: string;
}

export interface User {
    uuid: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    username: string;
    email?: Nullable<string>;
    role: UserRoleEnum;
}

export interface IQuery {
    getUsers(): User[] | Promise<User[]>;
}

export interface IMutation {
    login(input: LoginInput): TokenModel | Promise<TokenModel>;
    createUser(input: CreateUserInput): User | Promise<User>;
    validateUserConstraints(input: ValidateUserConstraintsInput): boolean | Promise<boolean>;
}

export type DateTime = any;
type Nullable<T> = T | null;
