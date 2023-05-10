export class Opportunity {
    id_Opportunity !:number ;
    capacity !: number;
    starDate !: Date;
    endDate !: Date;
    type: string;
    grade: string;
    specialite: string;
    needs: number;
    description: string;
    title: string;
    coef1stYear: number;
    coef2stYear: number;
    coef3stYear: number;
    code:String;
    qrContent: string;
    qrCodeImage: any;
    createdBy: any;
    quizzesQuiz: any;
    averageRating: number;
    numberOfRatings: number;
}
