import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

@NgModule({
  declarations: [
    AppComponent,
    ManageTeamsComponent,
    ManageSportsComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
