import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  template: `
    <h2>Inscription</h2>
    <form>
      <label>Nom : <input type="text" name="nom" /></label><br />
      <label>Email : <input type="email" name="email" /></label><br />
      <label>Mot de passe : <input type="password" name="password" /></label><br />
      <button type="submit">S'inscrire</button>
    </form>
  `
})
export class RegisterComponent { }