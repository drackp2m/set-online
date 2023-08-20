
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum GameStatus {
    Completed = "Completed",
    Expired = "Expired",
    InProgress = "InProgress",
    WaitingOpponents = "WaitingOpponents"
}

export enum UserRole {
    Admin = "Admin",
    Guest = "Guest",
    Registered = "Registered"
}

export interface ValidateUserConstraintsInput {
    email?: Nullable<string>;
    username?: Nullable<string>;
}

export interface GameEntity {
    createdAt: DateTime;
    expiresOn: DateTime;
    participants: UserEntity[];
    status: GameStatus;
    tableCards: string[];
    updatedAt: DateTime;
    uuid: string;
}

export interface IMutation {
    newGame(): GameEntity | Promise<GameEntity>;
}

export interface IQuery {
    getUsers(): UserEntity[] | Promise<UserEntity[]>;
    listGames(): GameEntity[] | Promise<GameEntity[]>;
    validateUserConstraints(input: ValidateUserConstraintsInput): boolean | Promise<boolean>;
}

export interface ISubscription {
    getManySubscription(): Nullable<string> | Promise<Nullable<string>>;
}

export interface UserEntity {
    createdAt: DateTime;
    email?: Nullable<string>;
    games: GameEntity[];
    role: UserRole;
    updatedAt: DateTime;
    username: string;
    uuid: string;
}

export type DateTime = any;
type Nullable<T> = T | null;
