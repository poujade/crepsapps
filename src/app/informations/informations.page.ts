import { Component } from '@angular/core';

@Component({
  selector: 'app-informations',
  templateUrl: 'informations.page.html',
  styleUrls: ['informations.page.scss']
})

export class InformationsPage {
  choice: String;

  /**
   * Méthode appelée à l'affichage d'une page
   *
   * Initialise les différents données nécessaires pour la page.
   */
  ngOnInit() {
    this.choice = "information";
  }
}

