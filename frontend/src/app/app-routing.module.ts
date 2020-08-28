import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [
  {path: '', redirectTo: '/contacts', pathMatch: 'full'},
  {
    path: 'contacts',
    component: ContactsComponent,
    canActivate: [AuthGuardService]
  },
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
