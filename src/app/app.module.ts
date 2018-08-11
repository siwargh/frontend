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
import { NevbarComponent } from './common/nevbar/nevbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { ApiServicesComponent } from './services/api-services/api-services.component';
import { CommonServicesComponent } from './services/common-services/common-services.component';
import { RightContainerComponent } from './right-container/right-container.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscriptionComponent,
    AcceuilPageComponent,
    InvitationPageComponent,
    MessagePageComponent,
    SettingsComponent,
    NevbarComponent,
    FooterComponent,
    HeaderComponent,
    ApiServicesComponent,
    CommonServicesComponent,
    
    RightContainerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
