import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <h1>p2000-aero-angular</h1>
      <nav>
        <a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Accueil</a> |
        <a routerLink="login" routerLinkActive="active">Connexion</a> |
        <a routerLink="register" routerLinkActive="active">Inscription</a> |
        <a routerLink="dashboard" routerLinkActive="active">Dashboard</a>
      </nav>
      <hr />
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    nav a {
      text-decoration: none;
      padding: 0.5rem;
      color: #007bff;
    }
    nav a.active {
      font-weight: bold;
      text-decoration: underline;
    }
    header {
      text-align: center;
      margin-bottom: 1rem;
    }
  `]
})
export class AppComponent { }
