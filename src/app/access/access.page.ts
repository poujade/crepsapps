import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-access',
  templateUrl: './access.page.html',
  styleUrls: ['./access.page.scss'],
})
export class AccessPage implements OnInit {
  PREVIOUS_STEP = -1;
  NEXT_STEP = 1;

  constructor(public translate: TranslateService) {
  }

  ngOnInit() {

  }

  /**
   * Méthode appelée lors la page est affichée
   */
  ionViewDidEnter() {
    // Initialisation des steppers
    const stepContainers = document.getElementsByClassName('step-container');
    for (let stepContainerIndex = 0; stepContainerIndex < stepContainers.length; stepContainerIndex++) {
      this.stepperChange(stepContainers[stepContainerIndex].getAttribute('data-name'), 1);
    }
  }

  goTo(type) {
    document.getElementsByClassName(type)[0].scrollIntoView();
  }

  /**
   * Change l'étape dans un navigateur d'étape
   * 
   * @param stepperName Identifiant du navigateur d'étape
   * @param stepIndex Index de l'étape à afficher (de 1 à ...)
   */
  stepperChange(stepperName: String, stepIndex: number) {
    const contents = document.querySelectorAll('[data-name="' + stepperName + '"] .step-item-content');
    const realStepIndex = stepIndex - 1;
    // Parcours de tous les contenus
    for (var contentIndex = 0; contentIndex < contents.length; ++contentIndex) {
      const classList = contents[contentIndex].classList
      // Test si le contenu doit être affiché
      if (realStepIndex !== contentIndex) {
        classList.remove('visible');
        (contents[contentIndex] as HTMLElement).style.maxHeight = '0px';
      }
      else if (!classList.contains('visible')) {
        (contents[contentIndex] as HTMLElement).style.maxHeight = contents[contentIndex].getAttribute('data-max-height');
        classList.add('visible');
      }
    }
  }
}
