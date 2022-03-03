import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default Route Component
  { path: 'home', component: HomeComponent, pathMatch: 'full' }, // Connecting Components
  { path: 'login', component: LoginComponent, pathMatch: 'full' }, // Connecting Components
  { path: 'register', component: RegisterComponent, pathMatch: 'full' }, // Connecting Components
  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AppComponent, HomeComponent, LoginComponent, RegisterComponent, PageNotFoundComponent];