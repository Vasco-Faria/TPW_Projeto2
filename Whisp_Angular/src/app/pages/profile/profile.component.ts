import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  token = "";

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Obter o username da URL usando ActivatedRoute
    this.route.paramMap.subscribe(params => {
      const username = params.get('username');

      // Verifique se o username foi obtido com sucesso
      if (username) {
        // Chame a função profile do serviço
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

            // Continue com a lógica adicional, se necessário
          },
          (error) => {
            console.error('Profile retrieval failed', error);
          }
        );
      } else {
        console.error('Username not found in the URL');
      }
    });
  }
}
