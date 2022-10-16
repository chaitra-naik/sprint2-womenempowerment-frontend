import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgoComponent } from './ngo/ngo.component';
import { NgoListComponent } from './ngo/ngo-list/ngo-list.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AddNgoComponent } from './ngo/add-ngo/add-ngo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoutComponent } from './logout/logout.component';
import { UpdateNgoComponent } from './ngo/update-ngo/update-ngo.component';
import { GetNgoIdComponent } from './ngo/get-ngo-id/get-ngo-id.component';
import { TrainingCourseComponent } from './training-course/training-course.component';
import { GetTrainingCourseComponent } from './training-course/get-training-course/get-training-course.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddTrainingcourseComponent } from './training-course/add-trainingcourse/add-trainingcourse.component';
import { UpdateTrainingcourseComponent } from './training-course/update-trainingcourse/update-trainingcourse.component';
import { GetTrainingcourseIdComponent } from './training-course/get-trainingcourse-id/get-trainingcourse-id.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { SchemeComponent } from './scheme/scheme.component';
import { AddSchemeComponent } from './scheme/add-scheme/add-scheme.component';
import { SchemeListComponent } from './scheme/scheme-list/scheme-list.component';
import { UpdateSchemeComponent } from './scheme/update-scheme/update-scheme.component';
import { GetSchemeIdComponent } from './scheme/get-scheme-id/get-scheme-id.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AddFeedbackComponent } from './feedback/add-feedback/add-feedback.component';
import { FeedbackListComponent } from './feedback/feedback-list/feedback-list.component';
import { TraineeComponent } from './trainee/trainee.component';
import { AddTraineeComponent } from './trainee/add-trainee/add-trainee.component';
import { TraineeListComponent } from './trainee/trainee-list/trainee-list.component';
import { UpdateTraineeComponent } from './trainee/update-trainee/update-trainee.component';
import { GetTraineeIdComponent } from './trainee/get-trainee-id/get-trainee-id.component';

@NgModule({
  declarations: [
    AppComponent,
    NgoComponent,
    NgoListComponent,
    LandingpageComponent,
    AddNgoComponent,
    UserComponent,
    LoginComponent,
    LogoutComponent,
    UpdateNgoComponent,
    GetNgoIdComponent,
    TrainingCourseComponent,
    GetTrainingCourseComponent,
    HeaderComponent,
    FooterComponent,
    AddTrainingcourseComponent,
    UpdateTrainingcourseComponent,
    GetTrainingcourseIdComponent,
    SchemeComponent,
    AddSchemeComponent,
    SchemeListComponent,
    UpdateSchemeComponent,
    GetSchemeIdComponent,
    PagenotfoundComponent,
    FeedbackComponent,
    AddFeedbackComponent,
    FeedbackListComponent,
    TraineeComponent,
    AddTraineeComponent,
    TraineeListComponent,
    UpdateTraineeComponent,
    GetTraineeIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
