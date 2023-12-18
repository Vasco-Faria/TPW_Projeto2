// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginModule } from './pages/login/login.module';
import { RegistrationModule } from './pages/registration/registration.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PostsModule } from './components/posts/posts.module';
import { New_PostModule } from './components/new-post/new_post.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, LoginModule, RegistrationModule, PostsModule, New_PostModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
