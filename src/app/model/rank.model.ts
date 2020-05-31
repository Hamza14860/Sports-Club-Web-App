export class Rank {
    playerID: string;
    gameName: string;
    ranking: string;

    constructor(pid,gn,rank){
        this.playerID=pid;
        this.gameName=gn;
        this.ranking = rank;
    }
}
