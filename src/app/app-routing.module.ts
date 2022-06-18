import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('src/app/features/list/list.module').then((m) => m.ListModule),
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
