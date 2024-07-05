
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum CachedPingStatus {
    bad = "bad",
    fair = "fair",
    good = "good"
}

export enum GameStatus {
    completed = "completed",
    expired = "expired",
    inProgress = "inProgress",
    waitingOpponents = "waitingOpponents"
}

export enum UserRole {
    Admin = "Admin",
    Guest = "Guest",
    Registered = "Registered"
}

export interface JoinGameInput {
    gameUuid: string;
}

export interface SendPingInput {
    pingValue: number;
}

export interface ValidateUserConstraintsInput {
    email?: Nullable<string>;
    username?: Nullable<string>;
}

export interface CachedPing {
    average: UserPing;
    values: UserPingValue[];
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

export interface GetPingsOutput {
    ping: CachedPing;
    userUuid: string;
}

export interface IMutation {
    joinGame(input: JoinGameInput): Game | Promise<Game>;
    newGame(): Game | Promise<Game>;
    sendPing(input: SendPingInput): boolean | Promise<boolean>;
}

export interface IQuery {
    getUserInfo(): User | Promise<User>;
    getUsers(): User[] | Promise<User[]>;
    listGames(): Game[] | Promise<Game[]>;
    validateUserConstraints(input: ValidateUserConstraintsInput): boolean | Promise<boolean>;
}

export interface ISubscription {
    getManySubscription(): string | Promise<string>;
    getPings(): GetPingsOutput[] | Promise<GetPingsOutput[]>;
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

export interface UserPing {
    status: CachedPingStatus;
    value: number;
}

export interface UserPingValue {
    timestamp: number;
    value: number;
}

export type DateTime = any;
type Nullable<T> = T | null;
