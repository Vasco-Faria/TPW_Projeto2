import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostsModule } from './posts.module';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
 selector: 'app-posts',
 templateUrl: './posts.component.html',
 styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 posts: any[] = [];

 constructor(private http: HttpClient, private authService: AuthService, private router: Router) { }

 ngOnInit() {
   this.getPosts().subscribe(data => {
     this.posts = data;
   });
 }

 getPosts(): Observable<any> {
   return this.http.get('http://localhost:8000/posts/');
 }

 profile(username: string) {
  this.authService.profile(username).subscribe(
    (response) => {
      console.log('Profile retrieval successful', response);

      // Extraia as informações do perfil da resposta
      const profileInfo = {
        user: response.user,
        image: response.image,
        bg_image: response.bg_image,
        biography: response.biography,
        followers_count: response.followers_count
      };

      // Salve as informações do perfil no localStorage
      localStorage.setItem('userProfile', JSON.stringify(profileInfo));

      this.router.navigate(['/profile', username]);
      },
      (error) => {
        console.error('Profile retrieval failed', error);
      }
    );
  }
}
