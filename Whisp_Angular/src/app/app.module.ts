// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginModule } from './pages/login/login.module';
import { RegistrationModule } from './pages/registration/registration.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PostsModule } from './components/posts/posts.module';
import { HomepageModule } from './pages/homepage/homepage.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { Create_PostModule } from './pages/create-post/create_post.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, LoginModule, RegistrationModule, PostsModule, HomepageModule, SidebarModule, Create_PostModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
