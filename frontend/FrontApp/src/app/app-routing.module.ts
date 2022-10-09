import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginGuard } from './guards/login.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'registerUser', component:RegisterUserComponent},
  {path:'passwordRecovery', component:PasswordRecoveryComponent},
  {path:'dashboard', component:DashboardComponent,canActivate:[LoginGuard]},
  {path:'home', component:HomePageComponent,canActivate:[LoginGuard]},
  {path:'**', redirectTo:'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
