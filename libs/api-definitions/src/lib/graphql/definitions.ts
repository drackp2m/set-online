
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

export interface ValidateUserConstraintsInput {
    email?: Nullable<string>;
    username?: Nullable<string>;
}

export interface IQuery {
    getUsers(): UserEntity[] | Promise<UserEntity[]>;
    validateUserConstraints(input: ValidateUserConstraintsInput): boolean | Promise<boolean>;
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
