import {Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { PostsComponent } from './components/posts/posts.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HomepageModule } from './pages/homepage/homepage.module';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegistrationComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'new_post', component: NewPostComponent },
    { path: '', component: HomepageComponent},
];