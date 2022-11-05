import { Userprofile } from "src/app/profile/model/userprofile";

export interface Chat {
    id: number;
    lastMessage?: string;
    lastMessageDate?: Date;
    userIds: string[];
    users: Userprofile[];
    chatPic?: string;
    chatName?: string;

    userId1: number;
    userId2: number;
    userName1: string;
    userName2: string;
}

export interface Message {
    text: string;
    senderId: string;
    sentDate: Date;
}