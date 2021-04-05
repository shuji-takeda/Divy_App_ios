import { ImageSourcePropType } from "react-native";

export interface DiveLogs{
    id:string,
    coverImageUrl?:string,
    avatarImageUrl?:string,
    userName?:string,
    title?:string,
    diveNo?:number,
    location?:string,
    divePoint?:string,
    date?:Date,
    entryTime?:Date,
    exitTime?:Date,
    entryPressure?:number,
    exitPressure?:number,
    visibility?:number,
    averageDepth?:number,
    maxDepth?:number,
    detail?:string,
    tags?:Array<number>,
    imageListUrl?:Array<string>,
}