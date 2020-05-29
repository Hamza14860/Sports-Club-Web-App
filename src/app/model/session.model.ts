export class Session {
    SessionID: String;
    PlayerID: String;
    CoachID: String;
    Game: String;
    Time: String;
    Court: String;
    OpponentName:String;

   constructor(sid,pld,cid,gme,tm,crt,opp){
        this.SessionID = sid;
        this.PlayerID = pld;
        this.CoachID = cid;
        this.Game = gme;
        this.Time = tm;
        this.Court = crt;
        this.OpponentName = opp;
   }
}
