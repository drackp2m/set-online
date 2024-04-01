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

export interface JoinGameInput {
    gameUuid: string;
}

export interface ValidateUserConstraintsInput {
    email?: Nullable<string>;
    username?: Nullable<string>;
}

export interface Game {
    createdAt: DateTime;
    expiresOn: DateTime;
    participants: User[];
    status: GameStatus;
    tableCards: string[];
    updatedAt: DateTime;
    uuid: string;
}

export interface IMutation {
    joinGame(input: JoinGameInput): Game | Promise<Game>;
    newGame(): Game | Promise<Game>;
}

export interface IQuery {
    getUserInfo(): User | Promise<User>;
    getUsers(): User[] | Promise<User[]>;
    listGames(): Game[] | Promise<Game[]>;
    validateUserConstraints(input: ValidateUserConstraintsInput): boolean | Promise<boolean>;
}

export interface ISubscription {
    getManySubscription(): string | Promise<string>;
}

export interface User {
    createdAt: DateTime;
    email?: Nullable<string>;
    games: Game[];
    role: UserRole;
    updatedAt: DateTime;
    username: string;
    uuid: string;
}

export type DateTime = any;
type Nullable<T> = T | null;
