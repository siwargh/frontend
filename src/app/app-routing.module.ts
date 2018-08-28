import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { LoginComponent } from './pages/login/login.component';
import { AcceuilPageComponent } from './pages/acceuil-page/acceuil-page.component';
import { MessagePageComponent } from './pages/message-page/message-page.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { InvitationPageComponent } from './pages/invitation-page/invitation-page.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [

  {  path: '', component: LoginComponent},
  { path: 'inscription', component: InscriptionComponent },
  { path: 'acceuil' , component: AcceuilPageComponent, canActivate:[AuthGuard]},
  { path: 'messages' , component: MessagePageComponent,canActivate:[AuthGuard]},
  { path: 'settings' , component: SettingsComponent,canActivate:[AuthGuard]},
  { path: 'invitations' , component: InvitationPageComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
