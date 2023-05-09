import {Question} from "./Question";
import {Opportunity} from "./Opportunity";

export class Quiz {
    id_Quiz:number;
    title:String;
    description:String;
    Duration:number;
    startDate:Date;
    endDate:Date;
    questions:Question[];
    oppotunity:Opportunity;

}