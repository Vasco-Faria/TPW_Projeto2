// profile.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = {}; // Replace with your user model or interface
  posts: any[] = []; // Replace with your post model or interface

  ngOnInit(): void {
    // Fetch user and post data from your API or service
    // Example: this.userService.getUserData().subscribe(user => this.user = user);
    // Example: this.postService.getUserPosts(this.user.id).subscribe(posts => this.posts = posts);
  }
}
