import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './Components/create/create.component';
import { UpdateComponent } from './Components/update/update.component';
import { HeaderComponent } from './Components/header/header.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { ViewComponent } from './Components/view/view.component';
import { ArchivesComponent } from './Components/archives/archives.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { EmpAddComponent } from './Component/emp-add/emp-add.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'create', component:CreateComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'header', component:HeaderComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'view', component: ViewComponent },
  { path: 'archives', component: ArchivesComponent },
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
