import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Place, PlacesService } from "../places.service";
import { Platform } from "@ionic/angular";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-show-place",
  templateUrl: "./show-place.page.html",
  styleUrls: ["./show-place.page.scss"]
})
export class ShowPlacePage implements OnInit {
  place = {} as Place;

  /**
   * Constructeur
   *
   * @param placesService Service permettant d'accéder aux données des lieux
   * @param route Service permettant de naviguer
   * @param platform Service permettant d'obtenir des informations sur la plateforme d'exécution
   */
  constructor(public placesService: PlacesService, public route: ActivatedRoute, public platform: Platform, private storage: Storage) {}

  /**
   * Méthode appelée à l'affichage d'une page
   *
   * Initialise les différents données nécessaires pour la page.
   */
  ngOnInit() {
    const placeId = Number(this.route.snapshot.params.placeId);

    this.place = this.getPlace(placeId);
    this.fabMapInitialisation();
  }

  /**
   * Obtenir les identifiants de la place à partir de son identifiant
   * @param placeId Identifiant de la place
   */
  getPlace(placeId: number) {
    return this.placesService.getById(placeId);
  }

  /**
   * Initialise l'animation sur le fab icon
   */
  fabMapInitialisation() {
    const FIRST_TIME_SHOWED_STATE = "showed";

    this.storage.get("firstTimeShowed").then(firstTimeShowed => {
      if (firstTimeShowed !== FIRST_TIME_SHOWED_STATE) {
        const fabButton = document.querySelector("ion-fab-button");
        fabButton.style.animation = "fab-animation 1s ease-in-out infinite alternate";
        this.storage.set("firstTimeShowed", FIRST_TIME_SHOWED_STATE);
      }
    });
  }

  /**
   * Afficher une carte pour diriger l'utilisateur
   *
   * @param latitude Latitude de la cible
   * @param longitude Longitude de la cible
   */

  goTo(latitude: Number, longitude: Number) {
    const latLng = latitude + "," + longitude;
    if (this.platform.is("ios")) {
      window.open("maps://?q=" + latLng, "_system");
    } else {
      const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=";
      window.open(googleMapsUrl + latLng);
    }
  }
}
