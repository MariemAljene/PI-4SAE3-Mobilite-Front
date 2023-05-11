import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ReponseQues} from "../../../models/ReponseQues";
import {QuestionRep} from "../../../models/QuestionRep";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {QuestionReponseService} from "./question-reponse.service";
import {not} from "rxjs/internal-compatibility";
import {AjoutQuestionReponseService} from "./ajouter-question-reponse/ajout-question-reponse.service";
import {AuthenticationService} from "../../../auth/service";

@Component({
  selector: 'app-question-reponse',
  templateUrl: './question-reponse.component.html',
  styleUrls: ['./question-reponse.component.scss']
})
export class QuestionReponseComponent implements OnInit {

  questionRep: QuestionRep
  idToDelete:any;

  constructor(private questionReponseService: QuestionReponseService, private router: Router, private _http: HttpClient,private AjoutQuestionReponseService:AjoutQuestionReponseService ,private  auth :AuthenticationService) {
  }

  questionReps: QuestionRep[];

  booleanHideButton=false;
  ngOnInit(): void {
    if(this.auth.currentUserValue.role[0].roleName=="Admin")
    {
      this.questionReponseService.getAllQuestionRep().subscribe(res => {
        this.questionReps = res;
        console.log(this.questionReps);



      });


    }
    else if(this.auth.currentUserValue.role[0].roleName=="User")
    {
      this.router.navigate(['/QuestionRepFront'])
    }

  }

  goToAjouterQuestion() {
    this.router.navigate(['/ajouterQuestionRep']);
  }


  unlockUser(i:number)
  {
    this.booleanHideButton=!this.booleanHideButton;
    var hiddenE= document.getElementById(String(i));
    var question= document.getElementById(String("q"+i));
    var type= document.getElementById(String("t"+i));
    hiddenE.hidden=!hiddenE.hidden;
    question.contentEditable="true";
    type.contentEditable="true";
    console.log(hiddenE);

  }
  save(i:number)
  {
    var question:QuestionRep=new QuestionRep();
    question.question=document.getElementById('q'+i).textContent;
    question.type=document.getElementById('t'+i).textContent;
    console.log(question);
    this.AjoutQuestionReponseService.editQuestionRep(i,question);
    document.getElementById('q'+i).contentEditable="false";
    document.getElementById('t'+i).contentEditable="false";
  }


  deleteQuestion(idQuestion:any,a:any){
    if (confirm("do you really want to delete this item ?"))
    {
      this.questionReponseService.deleteQuestion(idQuestion).subscribe(),
          this.delete(a)
    }
  }
  delete(a:any){
    this.questionReps.splice(a,1)

  }





}

