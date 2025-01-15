import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginGuard } from './guard/auth/login.guard';
import { RegistrationComponent } from './registration/registration.component';

export const routes: Routes = [
    {path: "", component: HomePageComponent, canActivate: [LoginGuard]},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegistrationComponent},
];
