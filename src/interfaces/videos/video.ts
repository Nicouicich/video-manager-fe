import { IUserVideo } from "../user/video-user";

export interface IVideo {
    id: string;
    url: string;
    title: string;
    description: string;
    createdAt: string;
    user: IUserVideo;
}