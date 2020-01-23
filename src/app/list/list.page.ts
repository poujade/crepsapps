import { Place, PlacesService } from '../places.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})

export class ListPage implements OnInit {
  places: Place[];
  type: string;
  label: string;

  /**
   * Constructeur
   *
   * @param translate Service de traduction des chaines de caractères
   * @param placesService Service permettant d'accéder aux données des lieux
   * @param route Service permettant de naviguer
   */
  constructor(public translate: TranslateService, public placesService: PlacesService, public route: ActivatedRoute) { }

  /**
   * Méthode appelée à l'affichage d'une page
   *
   * Initialise les différents données nécessaires pour la page.
   */
  ngOnInit() {
    this.type = this.route.snapshot.params.typeName;
    this.label = this.route.snapshot.params.label;
    this.places = this.placesService.getByType(this.type);
    this.translate.get(this.label).subscribe((translatedText: string) => {
      document.getElementById('header-title').innerText = translatedText;
    });
  }

  /**
   * Méthode appelée lors de la modification du filtre
   *
   * @param event Données de l'évènement appelant
   */
  filterList(event) {
    // Si le filtre est vide, réaffiche entièrement la liste
    if (event.target.value === '') {
      this.places = this.placesService.getByType(this.type);
    } else {
      this.places = this.placesService.getFilteredByType(this.type, event.target.value);
    }
  }
}
