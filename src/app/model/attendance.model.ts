export class Attendance {
    playerEmail: string;
    date: string;
    time: string;
    message: string;

   constructor(em,dt,tm,ms){
        this.playerEmail=em;
        this.date=dt;
        this.time=tm;
        this.message=ms;
   }
}
