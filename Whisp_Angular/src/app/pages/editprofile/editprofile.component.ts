// edit-my-profile.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; // Import FormBuilder and FormGroup
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { EditprofileModule } from './editprofile.module';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  username: string | null = null;
  userInfo: any = null;
  userProfile: any = null;

  // Declare a FormGroup for user info and user profile
  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, // Inject FormBuilder
    private authService: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    // Initialize the form in the constructor
    this.userForm = this.formBuilder.group({
      username: [this.userInfo?.username || ''],
      email: [this.userInfo?.email || ''],
      biography: [this.userProfile?.biography || '']
    });
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const userInfoString = localStorage.getItem('userInfo');
      if (userInfoString) {
        const userInfo = JSON.parse(userInfoString);
        this.username = userInfo.username;
        this.userInfo = userInfo;
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

  updateMyProfile() {
    if (this.username) {
      // Get the form values
      const formData = this.userForm.value;

      // Update user info
      this.authService.updateUserInfo(this.username, formData).subscribe(
        (updatedUserInfo) => {
          console.log('User Info updated successfully', updatedUserInfo);
          localStorage.setItem('userInfo', JSON.stringify(updatedUserInfo));
        },
        (error) => {
          console.error('User Info update failed', error);
          // Display error details in your UI, for example:
          if (error instanceof HttpErrorResponse) {
            console.error('Status:', error.status);
            console.error('Error:', error.error);
          }
        }
      );

      // Update user profile
      if (this.userProfile) {
        this.authService.updateUserProfile(this.userInfo.id, formData).subscribe(
          (updatedProfile) => {
            console.log('User Profile updated successfully', updatedProfile);
            localStorage.setItem('userProfile', JSON.stringify(updatedProfile));
          },
          (error) => {
            console.error('User Profile update failed', error);
          }
        );
      }
    }
  }
}
