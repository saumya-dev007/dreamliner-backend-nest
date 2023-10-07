import { Document } from "mongoose";

export interface IAurtist extends Document{
    readonly name: string;
    readonly gender: string;
    readonly image: string;
    readonly status:boolean
}