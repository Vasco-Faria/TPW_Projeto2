import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { isPlatformBrowser } from '@angular/common';
import { ProfileModule } from './profile.module';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string | null = null;
  userInfo: any = null;
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
      const userInfoString = localStorage.getItem('otheruserInfo');
      if (userInfoString) {
        const userInfo = JSON.parse(userInfoString);
        this.username = userInfo.username;
        this.userInfo = userInfo;
      }
    }

    if (this.username) {
      this.authService.otherprofile(this.username).subscribe(
        (userProfile) => {
          console.log('User Profile retrieval successful', userProfile);
          this.userProfile = userProfile;
          // Additional logic if necessary
        },
        (error) => {
          console.error('User Profile retrieval failed', error);
        }
      );
    }
  }
}
