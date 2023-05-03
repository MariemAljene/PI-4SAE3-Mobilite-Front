import {Opportunity} from "./Opportunity";

export class Condidacy {
    Id_Condidacy !:number ;
    moyenne_1year !: number;
    moyenne_2year !: number;
    moyenne_3year !: number;
    score: number;
    attempted: boolean;
    motivationdescription: string;
    status: number;
    user:string;
    idTable:number;
    opportunity:number;
    nameFaculte:string
}
