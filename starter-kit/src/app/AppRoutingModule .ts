import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";



import { HomeComponent } from "./main/Modules/home/home.component";
import {AdminModule} from "./main/Modules/Admin/admin.module";
import {OpportunityComponent} from './main/Modules/opportunity/opportunity.component';
import {CandidacyComponent} from "./main/Modules/candidacy/candidacy.component";
import {OpportunityFormComponent} from './main/Modules/opportunity/opportunity-form/opportunity-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EditOpportunityComponent} from './main/Modules/opportunity/edit-opportunity/edit-opportunity.component';
import {RemoveOpportunityComponent} from './main/Modules/opportunity/remove-opportunity/remove-opportunity.component';
import { AddQuestionComponent } from './main/Modules/Question/Add_Question/add-question/add-question.component';
import {SpecialityChartComponent} from "./main/Modules/opportunity/speciality-chart/speciality-chart.component";
import {AddCondidacyComponent} from "./main/Modules/candidacy/add-condidacy/add-condidacy.component";
import {
    OpportunityListFrontComponent
} from "./main/Modules/opportunity/opportunity-list-front/opportunity-list-front.component";
import {
    OpportunityDetailsListComponent
} from "./main/Modules/opportunity/opportunity-details-list/opportunity-details-list.component";
import {
    HistoriqueCondidaciesComponent
} from "./main/Modules/candidacy/historique-condidacies/historique-condidacies.component";
import {Q} from "@angular/cdk/keycodes";
import {QuizBackComponent} from "./main/Modules/Quiz/quiz-back/quiz-back.component";
import {QuizAddComponent} from "./main/Modules/Quiz/Add-Quiz/quiz-add/quiz-add.component";
import {AfficherQuestionService} from "./main/Modules/Question/afficher-question/afficher-question.service";
import {AfficherQuestionComponent} from "./main/Modules/Question/afficher-question/afficher-question.component";
import {RetreiveQuizezComponent} from "./main/Modules/Quiz/retreive-quizez/retreive-quizez.component";
import {UpdateOpportunityComponent} from "./main/Modules/opportunity/update-opportunity/update-opportunity.component";
import {QuizResultComponent} from "./main/Modules/Quiz/quiz-result/quiz-result.component";
import {ProfileModule} from "./main/Modules/profile/profile.module";
import {ReponseComponent} from "./main/Modules/question-reponse/reponse/reponse.component";
import {AjouterFoyerComponent} from "./main/Modules/foyer/ajouter-foyer/ajouter-foyer.component";
import {FoyerComponent} from "./main/Modules/foyer/foyer.component";
import {QuestionFrontComponent} from "./main/Modules/question-reponse/question-front/question-front.component";


import {ReclamationComponent} from "./main/Modules/reclamation/reclamation.component";
import {FoyerFrontComponent} from "./main/Modules/foyer/foyer-front/foyer-front.component";

import {
    AjouterReclamationComponent
} from "./main/Modules/reclamation/ajouter-reclamation/ajouter-reclamation.component";
import {VoiceRecognitionComponent} from "./main/Modules/voice-recognition/voice-recognition.component";
import {
    AjouterReponseComponent
} from "./main/Modules/question-reponse/reponse/ajouter-reponse/ajouter-reponse.component";
import {QuestionReponseComponent} from "./main/Modules/question-reponse/question-reponse.component";
import {
    AjouterQuestionReponseComponent
} from "./main/Modules/question-reponse/ajouter-question-reponse/ajouter-question-reponse.component";




const routes: Routes = [
    {
        path: "pages",
        loadChildren: () =>
            import("./main/pages/pages.module").then((m) => m.PagesModule),
    },


    {
        path: "home",
        component: HomeComponent,
    },
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full",
    },{
        path: 'candidacy',
         pathMatch: 'full',component:CandidacyComponent


    },
    {
        path: 'delete-opportunity/:Id_Opportunity',
        component: RemoveOpportunityComponent
    },

    {
        path: 'Reponse',
        pathMatch: 'full',component:ReponseComponent


    },
    {
        path: 'Reclamations',
        pathMatch: 'full',component:ReclamationComponent


    },
    {
        path: 'QuestionRepFront',
        pathMatch: 'full',component:QuestionFrontComponent


    },
    {
        path: 'ajouterReclamation',
        pathMatch: 'full',component:AjouterReclamationComponent



    },
    {
        path: 'VoiceRecognition',
        pathMatch: 'full',component:VoiceRecognitionComponent


    },
    {
        path: 'ajouterReponse',
        pathMatch: 'full',component:AjouterReponseComponent


    },
    {
        path: 'questionReponse',
        pathMatch: 'full',component:QuestionReponseComponent
    },
    {
        path: 'ajouterQuestionRep',
        component:AjouterQuestionReponseComponent
    },
    {
        path: 'foyer',
        pathMatch: 'full',component:FoyerComponent
    },
    {
        path: 'foyerFront',
        pathMatch: 'full',component:FoyerFrontComponent
    },
    {
        path: 'ajouterFoyer',
        pathMatch: 'full',component:AjouterFoyerComponent
    },
    {path: 'Retreive-opportunite', component: OpportunityComponent},

    {path: 'ajouter-opportunite', component: OpportunityFormComponent},
    { path: 'chart', component: SpecialityChartComponent },
    { path: 'candidacies/add', component: AddCondidacyComponent },
    {path:'OpportunityList',component:OpportunityListFrontComponent},
    { path: 'opportunitiy-id/:id_Opportunity', component: OpportunityDetailsListComponent },
    { path: 'HistoriqueCandidacy', component: HistoriqueCondidaciesComponent },
    { path: 'addCondidacy/:idOpportunity', component: AddCondidacyComponent },
    {path:'Quiz',component:QuizBackComponent},
    {path:'add-quiz',component :QuizAddComponent},
    {path:'afficherQuestion',component:AfficherQuestionComponent},
    {path:'afficherQuiz',component:RetreiveQuizezComponent},
    {path:'update_opportunity/:id_Opportunity',component:UpdateOpportunityComponent} ,
    {path:'add-question',component:AddQuestionComponent},
    {path:'QuizResult',component:QuizResultComponent},
    {
        path: "**",
        redirectTo: "/pages/miscellaneous/error", //Error 404 - Page not found
    },


];

@NgModule({
    imports: [AdminModule,ProfileModule,RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
    exports: [RouterModule],
})
export class AppRoutingModule {}