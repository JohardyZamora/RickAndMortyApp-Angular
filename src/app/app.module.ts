import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { DashboardService } from './servicios/dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { PersonajesComponent } from './componentes/personajes/personajes.component';
import { DxButtonModule } from 'devextreme-angular';
import { DxDataGridModule } from 'devextreme-angular';
import { FormsModule } from '@angular/forms';
import { LoginService } from './servicios/login.service';
import { AuthGuard } from './Guardianes/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PersonajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxButtonModule,
    DxDataGridModule,
    FormsModule
  ],
  providers: [DashboardService, LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
