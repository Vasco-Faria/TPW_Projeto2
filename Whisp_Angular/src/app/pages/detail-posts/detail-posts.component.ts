import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-posts',
  templateUrl: './detail-posts.component.html',
  styleUrls: ['./detail-posts.component.css']
})
export class DetailPostsComponent implements OnInit {
  postDetails: any = null;
  id: number | null = null;

  constructor(
    private route: ActivatedRoute, 
    private authService: AuthService, 
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; 
      if (this.id != null) {
        this.loadPostDetails(this.id);
      }
    });
  }

  loadPostDetails(postId: number) {
    this.http.get(`http://localhost:8000/post/${postId}/`).subscribe(
      data => {
        this.postDetails = data;
        console.log('Post details:', this.postDetails);
      },
      error => {
        console.error('Error loading post details', error);
      }
    );
  }


  profile(username: string) {
    this.authService.otherprofile(username).subscribe(
      (response) => {
        console.log('Profile retrieval successful', response);
  
       
        const profileInfo = {
          user: response.user,
          image: response.image,
          bg_image: response.bg_image,
          biography: response.biography,
          followers_count: response.followers_count
        };
  
       
        localStorage.setItem('otheruserProfile', JSON.stringify(profileInfo));
  
        this.router.navigate(['/profile']);
        },
        (error) => {
          console.error('Profile retrieval failed', error);
        }
      );
    }
}

