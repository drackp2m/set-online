
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum UserRole {
    Admin = "Admin",
    Registered = "Registered",
    Guest = "Guest"
}

export interface LoginInput {
    username: string;
    password: string;
}

export interface ValidateUserConstraintsInput {
    username?: Nullable<string>;
    email?: Nullable<string>;
}

export interface CreateUserInput {
    username: string;
    password: string;
    email?: Nullable<string>;
}

export interface User {
    uuid: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    username: string;
    email?: Nullable<string>;
    role: UserRole;
}

export interface TokenModel {
    token: string;
}

export interface IQuery {
    login(input: LoginInput): TokenModel | Promise<TokenModel>;
    validateUserConstraints(input: ValidateUserConstraintsInput): boolean | Promise<boolean>;
    getUsers(): User[] | Promise<User[]>;
}

export interface IMutation {
    createUser(input: CreateUserInput): User | Promise<User>;
}

export type DateTime = any;
type Nullable<T> = T | null;
