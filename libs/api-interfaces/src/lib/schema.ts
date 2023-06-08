
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum UserRole {
    Admin = "Admin",
    Guest = "Guest",
    Registered = "Registered"
}

export interface CreateUserInput {
    email?: Nullable<string>;
    password: string;
    username: string;
}

export interface LoginInput {
    password: string;
    username: string;
}

export interface ValidateUserConstraintsInput {
    email?: Nullable<string>;
    username?: Nullable<string>;
}

export interface IMutation {
    createUser(input: CreateUserInput): UserEntity | Promise<UserEntity>;
}

export interface IQuery {
    getUsers(): UserEntity[] | Promise<UserEntity[]>;
    login(input: LoginInput): TokenModel | Promise<TokenModel>;
    validateUserConstraints(input: ValidateUserConstraintsInput): boolean | Promise<boolean>;
}

export interface TokenModel {
    token: string;
}

export interface UserEntity {
    createdAt: DateTime;
    email?: Nullable<string>;
    role: UserRole;
    updatedAt: DateTime;
    username: string;
    uuid: string;
}

export type DateTime = any;
type Nullable<T> = T | null;
