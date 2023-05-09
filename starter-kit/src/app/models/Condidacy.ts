import {Opportunity} from "./Opportunity";
import {User} from "../auth/models";

export class Condidacy {
    id_Condidacy!:number ;
    moyenne_1year!: number;
    moyenne_2year!: number;
    moyenne_3year!: number;
    score!: number;
    attempted!: boolean;
    motivationdescription!: string;
    status!: number;
    user:User;
    idTable!:number;
    nameFaculte!:string
    quizResult!:number
}
