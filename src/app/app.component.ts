import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav>
    <a routerLink="">Accueil</a> |
    <a routerLink="login">Connexion</a> |
    <a routerLink="register">Inscription</a> |
    <a routerLink="dashboard">Dashboard</a>
  </nav>
  <hr />
  <router-outlet></router-outlet>
  `
})
export class AppComponent { }