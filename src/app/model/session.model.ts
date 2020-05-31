export class Session {
    SessionID: String;
    PlayerID: String;
    CoachID: String;
    Game: String;
    Date: String;
    Time: String;
    Court: String;
    OpponentName: String;

   constructor(sid,pld,cid,gme,dt,tm,crt,opp){
        this.SessionID = sid;
        this.PlayerID = pld;
        this.CoachID = cid;
        this.Game = gme;
        this.Date = dt;
        this.Time = tm;
        this.Court = crt;
        this.OpponentName = opp;
   }
}
