import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../../../../../auth/service";
import {Question} from "../../../../../models/Question";
import {QuestionBackService} from "./question-back.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  constructor(private router: Router,private http: HttpClient,private  AuthenticationService:AuthenticationService,private questionservie :QuestionBackService) { }

  ngOnInit(): void {

  }
  questionText: string;
  answer1Text: string;
  answer2Text: string;
  answer3Text: string;
  ajouterQuestion2() {
    const question = {
      questionText: this.questionText,
      answers: [
        { answerText: this.answer1Text },
        { answerText: this.answer2Text },
        { answerText: this.answer3Text }
      ]
    };
    const userId = this.AuthenticationService.currentUserValue.userName.toString(); // remplacer par l'identifiant de l'utilisateur connecté

    this.http.post(`/Quiz/question/${userId}`, question).subscribe(
        () => alert('Question ajoutée avec succès'),
        () => alert('Erreur lors de l\'ajout de la question')
    );
  }
  question: Question = {
    idQuestion:0,
    content: '',
    Speciality: '',
    image: '',
    point: 0,
    answers: [
      {id_Answer:0, content: '', correct: false },
      { id_Answer:0,content: '', correct: false },
      {id_Answer:0, content: '', correct: false },
      { id_Answer:0,content: '', correct: false }
    ]
  };
  ajouterQuestion3(question: Question) {
    this.questionservie.createOpportunity(question, this.AuthenticationService.currentUserValue.userName.toString()).subscribe(
        () => console.log('Question ajoutée'),
        error => console.error(error)
    );
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.question.image = reader.result as string;
    };
  }

  ajouterQuestion(question: Question): void {
    const Id_user =this.AuthenticationService.currentUserValue.userName.toString(); // Remplacez par l'ID utilisateur approprié
    this.questionservie.createOpportunity(this.question,Id_user)
        .subscribe(() => {
          alert('La question a été ajoutée avec succès.');
          this.question = new Question();
          this.router.navigate(['/afficherQuestion']);

        }, error => {
          console.error(error);
          alert('Une erreur est survenue lors de l\'ajout de la question.');
        });
  }


}
