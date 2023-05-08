import { Component, OnInit } from '@angular/core';
import {AfficherQuestionService} from "../../Question/afficher-question/afficher-question.service";
import {AuthenticationService} from "../../../../auth/service";
import {QuizServiceService} from "../Add-Quiz/quiz-add/quiz-service.service";
import {Quiz} from "../../../../models/Quiz";
import {Question} from "../../../../models/Question";
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-retreive-quizez',
  templateUrl: './retreive-quizez.component.html',
  styleUrls: ['./retreive-quizez.component.scss']
})
export class RetreiveQuizezComponent implements OnInit {
quiz:Quiz
quizez:Quiz[]
    question:Question
  constructor(private  QuizServiceService:QuizServiceService,private  AfficherQuestionService:AfficherQuestionService,private  AuthenticationService:AuthenticationService,private quizServiceService :QuizServiceService ) { }
  userId = this.AuthenticationService.currentUserValue.userName.toString(); // mettre l'ID de l'utilisateur souhaité ici
    numPagesToPrint:number
    ngOnInit(): void {
        this.QuizServiceService.getQuizzes(this.userId).subscribe(
            data => {
                this.quizez = data;
                console.log(this.quizez); // for debugging or to verify the received data

                // Iterate through each quiz and get the number of pages to print
                this.quizez.forEach(quiz => {
                    this.quizServiceService.getNbPagesAImprimer(quiz.id_Quiz).subscribe(
                        (numPages: number) => {
                            this.numPagesToPrint = numPages;
                        },
                        error => {
                            console.log(error);
                        }
                    );
                });
            },
            error => {
                console.log(error);
            }
        );
    }



    generatePdf(quiz: any) {
        // Define the PDF document structure
        const documentDefinition = {
            content: [
                { text: quiz.title, style: 'header', alignment: 'center' },
                { text: quiz.description, alignment: 'justify' },
                { text: 'Questions', style: 'subheader', alignment: 'left' },
                quiz.questions.map((q: any, i: number) => ({
                    layout: 'noBorders',
                    table: {
                        widths: ['auto', '*'],
                        body: [
                            [
                                { text: `${i + 1}. ${q.content}`, bold: true, margin: [0, 5, 0, 0] },
                                { text: '', margin: [0, 0, 0, 5] }
                            ],
                            [
                                {
                                    table: {
                                        widths: ['auto', '*'],
                                        body: [
                                            ['A.', q.answers[0].content],
                                            ['B.', q.answers[1].content],
                                            ['C.', q.answers[2].content],
                                            ['D.', q.answers[3].content]
                                        ]
                                    },
                                    layout: 'noBorders',
                                    margin: [20, 0, 0, 0]
                                },
                                {
                                    image: q.image ? q.image : '',
                                    width: 150,
                                    angle: 180,
                                    margin: [20, 0, 0, 0]
                                }
                            ]
                        ]
                    }
                }))
            ],
            styles: {
                header: { fontSize: 18, bold: true, margin: [0, 0, 0, 10] },
                subheader: { fontSize: 16, bold: true, margin: [0, 10, 0, 5] }
            }
        };

        // Set the PDF fonts
        pdfMake.vfs = pdfFonts.pdfMake.vfs;

        // Generate and open the PDF
        pdfMake.createPdf(documentDefinition).open();
    }



}
