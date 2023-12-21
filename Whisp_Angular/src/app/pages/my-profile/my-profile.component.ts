import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { isPlatformBrowser } from '@angular/common';
import { MyProfileModule } from './my-profile.module';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css'
})
export class MyProfileComponent implements OnInit {
  username: string | null = null;
  userProfile: any = null;
  BackGroundImage: string = 'http://localhost:8000/media/bg_image/back_default.jpg';
  ProfileImage: string = 'http://localhost:8000/media/profiles/default_user.jpg';

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const userInfoString = localStorage.getItem('userInfo');
      if (userInfoString) {
        const userInfo = JSON.parse(userInfoString);
        this.username = userInfo.username;
      }
    }

    if (this.username) {
      this.authService.myprofile(this.username).subscribe(
        (userProfile) => {
          console.log('User Profile retrieval successful', userProfile);
          this.userProfile = userProfile;
        },
        (error) => {
          console.error('User Profile retrieval failed', error);
        }
      );
    }
  }
}
