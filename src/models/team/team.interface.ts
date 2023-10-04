import { Document } from "mongoose";

export interface ITeam extends Document{
    readonly name:string;
    readonly image:string;
    readonly designation:string;
}