import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddFeedbackComponent } from './feedback/add-feedback/add-feedback.component';
import { FeedbackListComponent } from './feedback/feedback-list/feedback-list.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AddNgoComponent } from './ngo/add-ngo/add-ngo.component';
import { GetNgoIdComponent } from './ngo/get-ngo-id/get-ngo-id.component';
import { NgoListComponent } from './ngo/ngo-list/ngo-list.component';
import { NgoComponent } from './ngo/ngo.component';
import { UpdateNgoComponent } from './ngo/update-ngo/update-ngo.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddSchemeComponent } from './scheme/add-scheme/add-scheme.component';
import { GetSchemeIdComponent } from './scheme/get-scheme-id/get-scheme-id.component';
import { SchemeListComponent } from './scheme/scheme-list/scheme-list.component';
import { UpdateSchemeComponent } from './scheme/update-scheme/update-scheme.component';
import { AddTraineeComponent } from './trainee/add-trainee/add-trainee.component';
import { GetTraineeIdComponent } from './trainee/get-trainee-id/get-trainee-id.component';
import { TraineeListComponent } from './trainee/trainee-list/trainee-list.component';
import { UpdateTraineeComponent } from './trainee/update-trainee/update-trainee.component';
import { AddTrainingcourseComponent } from './training-course/add-trainingcourse/add-trainingcourse.component';
import { GetTrainingCourseComponent } from './training-course/get-training-course/get-training-course.component';
import { TrainingCourseComponent } from './training-course/training-course.component';
import { UpdateTrainingcourseComponent } from './training-course/update-trainingcourse/update-trainingcourse.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'landingpage' },
  {path: 'landingpage',component: LandingpageComponent},
  { path: 'ngo', component: NgoComponent },
  {path:'ngolist',component:NgoListComponent},
  {path:'addngo',component:AddNgoComponent, canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'updatengo/:ngoId',component:UpdateNgoComponent, canActivate:[AuthGuard]},
  {path:'getngobyid/:ngoId',component:GetNgoIdComponent},
  {path:'trainingcourse',component:TrainingCourseComponent},
  {path:'trainingcourselist',component:GetTrainingCourseComponent},
  {path:'addtrainingcourse',component:AddTrainingcourseComponent,canActivate:[AuthGuard]},
  {path:'gettrainingcoursebyid/:trainingCourseId',component:GetTrainingCourseComponent},
  {path:'updatetrainingcourse/:trainingCourseId',component:UpdateTrainingcourseComponent},
  {path:'addschemes',component:AddSchemeComponent,canActivate:[AuthGuard]},
  {path:'updatescheme',component:UpdateSchemeComponent},
  {path:'getschemebyid/:schemeId',component:GetSchemeIdComponent},
  {path:'getschemes',component:SchemeListComponent},
  {path:'updatescheme/:schemeId',component:UpdateSchemeComponent},
  {path:'addfeedback',component:AddFeedbackComponent},
  {path:'feedbacklist',component:FeedbackListComponent},
  {path:'addtrainee',component:AddTraineeComponent},
  {path:'traineelist',component:TraineeListComponent},
  {path:'gettraineebyid/:traineeId',component:GetTraineeIdComponent},
  {path:'updatetrainee/:traineeId',component:UpdateTraineeComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
