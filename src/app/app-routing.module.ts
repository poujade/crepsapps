import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Liste des routes de l'affichage en onglet.
 *
 * L'intégralité des routes se trouvent dans le fichier app/tabs/tabs.router.module.ts
 */
const routes: Routes = [{ path: '', loadChildren: './tabs/tabs.module#TabsPageModule'}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
