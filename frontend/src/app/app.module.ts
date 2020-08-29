import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './services/user.service';
import { AuthInterceptor } from './services/auth.interceptor';
import { AuthGuardService } from './services/auth-guard.service';
import { ContactsComponent } from './components/contacts/contacts.component';
import { GoogleService } from './services/googleService';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthGuardService,
    GoogleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
