import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {QuestionReponseComponent} from "../question-reponse.component";
import {AuthenticationService} from "../../../../auth/service";
import {Router} from "@angular/router";
import {QuestionRep} from "../../../../models/QuestionRep";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormOpportunityService} from "../../opportunity/opportunity-form/form-opportunity.service";
import {User} from "../../../../auth/models";
import {Opportunity} from "../../../../models/Opportunity";
import {AjoutQuestionReponseService} from "./ajout-question-reponse.service";
import {VoiceRecognitionService} from "../../voice-recognition/voice-recognition.service";

@Component({
  selector: 'app-ajouter-question-reponse',
  templateUrl: './ajouter-question-reponse.component.html',
  styleUrls: ['./ajouter-question-reponse.component.scss']
})
export class AjouterQuestionReponseComponent implements OnInit{



    startVoiceRecognition() {
        this.voiceRecognitionService.start();
    }


    Question!: string;
    Type!: string;

    constructor(private questionReponseService: AjoutQuestionReponseService,private router: Router,private  AuthenticationService:AuthenticationService, public voiceRecognitionService: VoiceRecognitionService) {}
    user:User
    questionRep:QuestionRep
    onSubmit(form: NgForm) {
        const questionRep: any = form.value;
        questionRep.question = this.voiceRecognitionService.text;

        this.questionReponseService.AjouterQuestionRep(questionRep)
            .subscribe(
                newQuestion => {
                    console.log('Question created successfully', newQuestion);
                    // Redirect the user to the newly created opportunity details page
                },
                error => {
                    console.error('Error creating opportunity', error);
                    // Display an error message to the user
                }
            );
        this.router.navigate(['/questionReponse']);

    }

    ngOnInit(): void {

        this.RedirectToVoice = () => {
            this.router.navigate(['/VoiceRecognition']);
        }

    }
    RedirectToVoice() {
        // Méthode pour ajouter une question
    }

}
