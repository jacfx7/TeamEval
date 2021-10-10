import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from '@component/sign-in/sign-in.component';
import { SignUpComponent } from '@component/sign-up/sign-up.component';
import { ForgotPasswordComponent } from '@component/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '@component/verify-email/verify-email.component';
import { AuthGuard } from '@shared/guard/auth.guard';
import { ManageTeamsComponent } from '@component/admin/manage-teams/manage-teams.component';
import { ManageSportsComponent } from '@component/admin/manage-sports/manage-sports.component';
import { SignOutComponent } from '@component/sign-out/sign-out.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-out', component: SignOutComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  {
    path: 'dashboard',
    component: ManageTeamsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'sports', component: ManageSportsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '', component: ManageSportsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
