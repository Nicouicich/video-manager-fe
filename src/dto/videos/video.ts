import { UserVideoDto } from "../user/video-user.dto";

export interface VideoDto {
    id: string;
    url: string;
    title: string;
    description: string;
    createdAt: string;
    user: UserVideoDto;
}