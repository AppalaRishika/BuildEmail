import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DetailsPageComponent } from './details-page/details-page.component'
import { EmailService } from './email.service';
import { ComposeComponent } from './compose/compose.component';
import { EmailPipe } from './email.pipe';
import { DraftComponent } from './draft/draft.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LandingPageComponent,
    DetailsPageComponent,
    ComposeComponent,
    EmailPipe,
    DraftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
