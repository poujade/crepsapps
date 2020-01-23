import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService
  ) {
    this.initializeApp();
  }

  /**
   * Initialisation de l'application
   */
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.initLanguage();
    });
  }

  /**
   * Initialisation du langage
   * La langue est récupérée à partir des données du navigateur
   */
  initLanguage() {
    let locale = window.navigator.language;

    if (locale.length > 2) {
      locale = locale.substr(0, 2);
    }
    console.log(locale);
    if (['fr', 'en', 'es', 'ja'].indexOf(locale) >= 0) {
      this.translate.setDefaultLang(locale);
    } else {
      this.translate.setDefaultLang('en');
    }
  }
}
