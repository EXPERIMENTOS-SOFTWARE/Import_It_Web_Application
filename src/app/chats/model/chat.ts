export interface Chat {
    id: number;
    user1: {
        id: number;
        message: string;
        date: string;
    }
    user2: {
        id: number;
        message: string;
        date: string;
    }
}