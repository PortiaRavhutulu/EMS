import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './Components/create/create.component';
import { UpdateComponent } from './Components/update/update.component';
import { ViewComponent } from './Components/view/view.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    UpdateComponent,
    ViewComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
