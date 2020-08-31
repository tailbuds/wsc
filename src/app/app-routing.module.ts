import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'search',
    loadChildren: () =>
      import('./modules/search-results/search-results.module').then(
        (m) => m.SearchResultsPageModule
      ),
  },
  {
    path: 'input',
    loadChildren: () =>
      import('./modules/input/input.module').then((m) => m.InputPageModule),
  },
  {
    path: 'oauth',
    redirectTo: 'input',
    pathMatch: 'full',
  },
  {
    path: 'approve',
    loadChildren: () =>
      import('./modules/approve/approve.module').then(
        (m) => m.ApprovePageModule
      ),
  },
  {
    path: 'notfound',
    loadChildren: () =>
      import('./modules/notfound/notfound.module').then(
        (m) => m.NotfoundPageModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./index/index.module').then((m) => m.IndexPageModule),
  },
  {
    path: '**',
    redirectTo: 'notfound',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
