import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

/**
 * Liste des routes pour l'ensemble de l'application
 */
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          },
          {
            path: 'list/:typeName/:label',
            loadChildren: '../list/list.module#ListPageModule'
          },
          {
            path: 'showPlace/:placeId',
            loadChildren: '../show-place/show-place.module#ShowPlacePageModule'
          }
        ]
      },
      {
        path: 'access',
        children: [
          {
            path: '',
            loadChildren: '../access/access.module#AccessPageModule'
          }
        ]
      },
      {
        path: 'informations',
        children: [
          {
            path: '',
            loadChildren: '../informations/informations.module#InformationsPageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
