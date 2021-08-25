import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF, CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '@root/environments/environment';
import { AppRoutingModule } from '@root/app/app-routing.module';
import { AppComponent } from '@root/app/app.component';
import { ManageTeamsComponent } from '@component/admin/manage-teams/manage-teams.component';
import { ManageSportsComponent } from '@component/admin/manage-sports/manage-sports.component';
import { SignInComponent } from '@component/sign-in/sign-in.component';
import { SignUpComponent } from '@component/sign-up/sign-up.component';
import { ForgotPasswordComponent } from '@component/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '@component/verify-email/verify-email.component';
import { UserComponent } from '@component/user/user.component';
import { MaterialImports } from '@root/app/app.material';
import { AuthService } from '@service/auth.service';
import { MenuComponent } from './component/menu/menu.component';
import { NewTeamComponent } from './component/new-team/new-team.component';
import { ManageSkillComponent } from './component/admin/manage-skill/manage-skill.component';
import { SkillItemComponent } from './component/admin/skill-item/skill-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageTeamsComponent,
    ManageSportsComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    UserComponent,
    MenuComponent,
    NewTeamComponent,
    ManageSkillComponent,
    SkillItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialImports,
    ToastrModule.forRoot({
      enableHtml: true,
    }),
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: "/" },
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
