import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ForumComponent } from './forum/forum.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { TopicComponent } from './topic/topic.component';
import { CommentsComponent } from './comments/comments.component';
import { CguComponent } from './cgu/cgu.component';
import { PolitiqueComponent } from './politique/politique.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForumComponent,
    HomeComponent,
    ProfileComponent,
    TopicComponent,
    CommentsComponent,
    CguComponent,
    PolitiqueComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
