import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPageComponent } from './page/hero-page/hero-page.component';
import { LayoutPageComponent } from './page/layout-page/layout-page.component';
import { ListPageComponent } from './page/list-page/list-page.component';
import { NewPageComponent } from './page/new-page/new-page.component';
import { SearchPageComponent } from './page/search-page/search-page.component';


@NgModule({
  declarations: [HeroPageComponent, LayoutPageComponent, ListPageComponent, NewPageComponent, SearchPageComponent],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
