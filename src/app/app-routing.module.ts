import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('src/app/features/popular-list/popular-list.module').then(
        (m) => m.PopularListModule
      ),
  },
  {
    path: 'detail',
    loadChildren: () =>
      import('src/app/features/detail/detail.module').then(
        (m) => m.DetailModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
