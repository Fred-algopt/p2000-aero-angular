import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <h2>Connexion</h2>
    <form>
      <label>Email : <input type="email" name="email" /></label><br />
      <label>Mot de passe : <input type="password" name="password" /></label><br />
      <button type="submit">Se connecter</button>
    </form>
  `
})
export class LoginComponent { }