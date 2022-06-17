
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class User {
    uuid: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    username: string;
    email: string;
    password: string;
}

export abstract class IQuery {
    abstract getAllUsers(): User[] | Promise<User[]>;
}

export type DateTime = any;
type Nullable<T> = T | null;
