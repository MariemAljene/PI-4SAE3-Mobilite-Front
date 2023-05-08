import {Question} from "./Question";

export class Quiz {
    id_Quiz:number;
    title:String;
    description:String;
    Duration:number;
    startDate:Date;
    endDate:Date;
    questions:Question[];

}