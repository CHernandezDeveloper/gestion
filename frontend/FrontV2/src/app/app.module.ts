import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//Material
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import { MaterialFileInputModule } from 'ngx-material-file-input';


//iconos
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Componentes
import { InformationComponent } from './components/information/information.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegInfoEmpresaComponent } from './components/reg-info-empresa/reg-info-empresa.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { LevelsEvaluationComponent } from './components/levels-evaluation/levels-evaluation.component';
import { UpInformationComponent } from './components/up-information/up-information.component';
import { MenuAuditComponent } from './components/menu-audit/menu-audit.component';
import { AreasComponent } from './components/areas/areas.component';
import { AdministrativasComponent } from './components/administrativas/administrativas.component';
import { TecnicasComponent } from './components/tecnicas/tecnicas.component';
import { ResultadosAuditoriasComponent } from './components/resultados-auditorias/resultados-auditorias.component';
import { VisualResultadosComponent } from './components/visual-resultados/visual-resultados.component';
import { PhvaComponent } from './components/phva/phva.component';
import jsPDF from 'jspdf';
import { ChangePasswordComponent } from './components/change-password/change-password.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InformationComponent,
    MenuComponent,
    RegInfoEmpresaComponent,
    RegisterUserComponent,
    DashboardComponent,
    HomepageComponent,
    RegisterUserComponent,
    HomeComponent,
    LevelsEvaluationComponent,
    UpInformationComponent,
    MenuAuditComponent,
    AreasComponent,
    AdministrativasComponent,
    TecnicasComponent,
    ResultadosAuditoriasComponent,
    VisualResultadosComponent,
    PhvaComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatExpansionModule,
    MatRadioModule,
    MaterialFileInputModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
