import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  @ViewChild(IonContent) content: IonContent;
  /**
   * Constructeur
   *
   * @param router Service permettant de naviguer
   */
  constructor(private router: Router) { }

  /**
   * Affiche la page contenant liste des lieux d'un type donné
   *
   * @param typeName Code du type de lieu
   * @param label Label du type de lieu
   */
  showList(typeName: string, label: string) {
    this.router.navigateByUrl('/tabs/home/list/' + typeName + '/' + label);

  }
  /**
   * Scroll en haut de page des l'affichage
   */
  ionViewWillEnter() {
    this.content.scrollToTop(0);
  }
}
