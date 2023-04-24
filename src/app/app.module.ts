import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './Components/create/create.component';
import { UpdateComponent } from './Components/update/update.component';
<<<<<<< HEAD
import { EmployeeComponent } from './Components/employee/employee.component';
=======
import { ViewComponent } from './Components/view/view.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
>>>>>>> 19213cb03c657d2664b466cb4523e7786669c2b5

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    UpdateComponent,
<<<<<<< HEAD
    EmployeeComponent
=======
    ViewComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent
>>>>>>> 19213cb03c657d2664b466cb4523e7786669c2b5
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
