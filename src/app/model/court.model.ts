export class Court {
    CourtNo: string;
    courtName: string;
    gameName: string;
    isFree: string;

    constructor(crt,crn,gn,isf){
        this.CourtNo = crt;
        this.courtName = crn;
        this.gameName = gn;
        this.isFree = isf;
    }
}
