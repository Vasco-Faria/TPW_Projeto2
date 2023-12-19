import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'] // Fix the typo in 'styleUrl' to 'styleUrls'
})
export class SidebarComponent {
  // Remove the duplicate declaration of authService
  authService: AuthService;

  // Inject the AuthService in the constructor
  constructor(authService: AuthService) {
    this.authService = authService;
  }

  logout() {
    this.authService.logout();
  }
  
}
