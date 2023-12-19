import {Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { PostsComponent } from './components/posts/posts.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HomepageModule } from './pages/homepage/homepage.module';
import { CreatePostComponent } from './pages/create-post/create-post.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegistrationComponent },
    { path: 'create_post', component: CreatePostComponent },
    { path: '', component: HomepageComponent},
];