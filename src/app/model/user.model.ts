export class User {
    name: string;
    email: string;
    opponentRank: string;
    dailyTimings: string;
    games: Array<string>;
    password: string;

    constructor(nm,em,or,dt,ps,arr){
        this.name=nm;
        this.email=em;
        this.opponentRank=or;
        this.dailyTimings=dt;
        this.password=ps;
        this.games=arr;
    }
}
