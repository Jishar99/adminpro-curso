import { NgModule } from "@angular/core";

import { PagesComponent } from './pages.component';

//RUTAS
import { PAGES_ROUTES } from './pages.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { sharedPages } from '../shared/shared.module';


@NgModule({
     declarations: [
          PagesComponent,
          DashboardComponent,
          ProgressComponent,
          Graficas1Component,
     ],
     exports: [
          DashboardComponent,
          ProgressComponent,
          Graficas1Component,
     ],
     imports: [
          sharedPages,
          PAGES_ROUTES,
     ]
})


export class PagesModule {

}