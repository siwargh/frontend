import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { AcceuilPageComponent } from './pages/acceuil-page/acceuil-page.component';
import { InvitationPageComponent } from './pages/invitation-page/invitation-page.component';
import { MessagePageComponent } from './pages/message-page/message-page.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { CommonServicesComponent } from './services/common-services/common-services.component';
import { RightContainerComponent } from './right-container/right-container.component';
import { UserBadgeComponent } from './user/user-badge/user-badge.component';
import { LeftsideUserComponent } from './user/leftsideuser/leftsideuser.component';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormControl, FormsModule, FormGroup } from '@angular/forms';
import { PostComponent } from './posts/post/post.component';
import { CommentComponent } from './posts/comment/comment.component';
import { RatingComponent } from './posts/rating/rating.component';
import { UserConnectComponent } from './user-connect/user-connect.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { SendInvitationComponent } from './send-invitation/send-invitation.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscriptionComponent,
    AcceuilPageComponent,
    InvitationPageComponent,
    MessagePageComponent,
    SettingsComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    
    CommonServicesComponent,
    RightContainerComponent,
    LeftsideUserComponent,
    UserBadgeComponent,
    PostComponent,
    CommentComponent,
    RatingComponent,
    UserConnectComponent,
    UpcomingEventsComponent,
    SendInvitationComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
