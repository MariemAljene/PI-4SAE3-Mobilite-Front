import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../../../../auth/service";
import {ReponseService} from "../reponse.service";
import {QuestionReponseService} from "../../question-reponse.service";
import {QuestionRep} from "../../../../../models/QuestionRep";
import {ReponseQues} from "../../../../../models/ReponseQues";

@Component({
  selector: 'app-ajouter-reponse',
  templateUrl: './ajouter-reponse.component.html',
  styleUrls: ['./ajouter-reponse.component.scss']
})
export class AjouterReponseComponent implements OnInit {

  ReponseForm : FormGroup ;
  idQuestion : number ;
  @Input() questionRep:QuestionRep;
  public id_Question:any;

  idReponse !:any ;
  reponse !:any;



  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private formBuilder: FormBuilder,
              private reponseService:ReponseService,
              private questionRepService:QuestionReponseService) { }

  ngOnInit(): void {
    this.id_Question = +this.route.snapshot.paramMap.get('id_Question')
  }

  @Input() reponses:ReponseQues ;

  submitForm(form:NgForm){
    const newReponseQues : any = form.value;
    this.id_Question= +this.route.snapshot.paramMap.get('idQuestion');
    if (!Number.isInteger(this.id_Question)){
      console.log('Invalid id_Question value: ' +  this.id_Question);
      return;

    }
    this.reponseService.ajouterReponse(newReponseQues,this.id_Question)
        .subscribe(reponses=>console.log(reponses));

  }

}
