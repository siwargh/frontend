import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { LoginComponent } from './pages/login/login.component';
import { AcceuilPageComponent } from './pages/acceuil-page/acceuil-page.component';
import { MessagePageComponent } from './pages/message-page/message-page.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { InvitationPageComponent } from './pages/invitation-page/invitation-page.component';



const routes: Routes = [

  {  path: '', component: LoginComponent},
  { path: 'inscription', component: InscriptionComponent },
  { path: 'acceuil' , component: AcceuilPageComponent},
  { path: 'messages' , component: MessagePageComponent},
  { path: 'settings' , component: SettingsComponent},
  { path: 'invitations' , component: InvitationPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
