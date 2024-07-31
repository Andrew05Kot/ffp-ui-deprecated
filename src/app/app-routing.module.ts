import { inject, NgModule } from '@angular/core';
import { CanActivateFn, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/core/interceptors/auth.guard';
import { HomePageComponent } from '@app/guest/home-page/home-page.component';

// const isAuthenticated: CanActivateFn = (route, state) => {
//   return inject(AuthGuard).isAccessAllowed(route, state);
// }

// const isAdmin: CanActivateFn = (route, state) => {
//   return inject(AuthGuard).isAdmin();
// }
//
// const isClient: CanActivateFn = (route, state) => {
//   return inject(AuthGuard).isClient();
// }

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'app',
        // canActivate: [isAuthenticated, isClient],
        loadChildren: () => import('@app/client/client.module').then(m => m.ClientModule)
      },
      {
        path: 'admin',
        // canActivate: [isAuthenticated, isAdmin],
        loadChildren: () => import('@app/admin-panel/admin-panel.module').then(m => m.AdminPanelModule)
      },
      {
        path: 'home-page',
        component: HomePageComponent
      },
      {
        path: '**', redirectTo: 'home-page'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
