export interface IUser {
    userId: string;
    firstname: string;
    lastname: string;
    email: string;
}

export class User {

    constructor(
        public userId,
        public firstname,
        public lastname,
        public email) {}
}