import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { InformationsPageModule } from '../informations/informations.module';
import { AccessPageModule } from '../access/access.module';
import { HomePageModule } from '../home/home.module';
import { ListPageModule } from '../list/list.module';
import { ShowPlacePageModule } from '../show-place/show-place.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    InformationsPageModule,
    AccessPageModule,
    ListPageModule,
    ShowPlacePageModule,
    TranslateModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
