import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputPage } from './input.page';

const routes: Routes = [
  {
    path: '',
    component: InputPage,
    children: [
      {
        path: 'stat',
        loadChildren: () =>
          import('./pages/stat/stat.module').then((m) => m.StatPageModule),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'scorecard',
        loadChildren: () =>
          import('./pages/scorecard/scorecard.module').then(
            (m) => m.ScorecardPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputPageRoutingModule {}
