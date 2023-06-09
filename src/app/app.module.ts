import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './Components/create/create.component';
import { UpdateComponent } from './Components/update/update.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { ViewComponent } from './Components/view/view.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { ArchivesComponent } from './Components/archives/archives.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpAddComponent } from './Component/emp-add/emp-add.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    UpdateComponent,
    ArchivesComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    EmployeeComponent,
    ViewComponent,
    HomeComponent,
    EmpAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   ReactiveFormsModule,
   FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
