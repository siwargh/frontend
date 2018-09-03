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
import { RightContainerComponent } from './right-container/right-container.component';
import { UserBadgeComponent } from './user/user-badge/user-badge.component';
import { LeftsideUserComponent } from './user/leftsideuser/leftsideuser.component';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormControl, FormsModule, FormGroup } from '@angular/forms';
import { PostComponent } from './posts/post/post.component';
import { CommentComponent } from './posts/comment/comment.component';
import { RatingComponent } from './posts/rating/rating.component';
import { UserConnectComponent } from './user/user-connect/user-connect.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { SendInvitationComponent } from './send-invitation/send-invitation.component';
import { UploadAvatarComponent } from './upload-avatar/upload-avatar.component';
import { SendingInviComponent } from './sending-invi/sending-invi.component';
import { ReceivingInviComponent } from './receiving-invi/receiving-invi.component';
import {NgUploaderModule} from 'ngx-uploader';
import { SenderUserComponent } from './sender-user/sender-user.component';
import { FeriendsListComponent } from './user/feriends-list/feriends-list.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { FavoritePlaceMapComponent } from './pages/acceuil-page/favorite-place-map/favorite-place-map.component';
import { AgmCoreModule } from '@agm/core';
import { PostService } from './services/api-services/post.service';
import { AppConfig } from './app.config';
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
    RightContainerComponent,
    LeftsideUserComponent,
    UserBadgeComponent,
    PostComponent,
    CommentComponent,
    RatingComponent,
    UserConnectComponent,
    UpcomingEventsComponent,
    SendInvitationComponent,
    UploadAvatarComponent,
    SendingInviComponent,
    ReceivingInviComponent,
    SenderUserComponent,
    FeriendsListComponent,
    EditPostComponent,
    FavoritePlaceMapComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgUploaderModule,
    CKEditorModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCkC7tfU7yfLjo119IttdtZ-FLXJMLK8rU'
    })
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [AppConfig, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
