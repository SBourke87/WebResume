import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
{ path: 'home', component: HomepageComponent},
{path: 'project', component: ProjectComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
