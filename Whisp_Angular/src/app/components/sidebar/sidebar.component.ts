import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'] // Fix the typo in 'styleUrl' to 'styleUrls'
})
export class SidebarComponent {
  // Remove the duplicate declaration of authService
  authService: AuthService;
  userName: string | null = null;

  // Inject the AuthService in the constructor
  constructor(authService: AuthService) {
    this.authService = authService;
  }

  ngOnInit() {
    const userInfo = localStorage.getItem('userInfo');
    console.log(userInfo);
    if (userInfo) {
      this.userName = JSON.parse(userInfo).username;
    }
  }


  logout() {
    this.authService.logout();
  }

}
