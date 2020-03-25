import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'create-post',
        loadChildren: () => import('../create-post/create-post.module').then( m => m.CreatePostPageModule)
      },
      {
        path: 'view-post',
        loadChildren: () => import('../view-post/view-post.module').then( m => m.ViewPostPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then( m => m.SettingsPageModule)
      }
    ]
  }
];

// { path: '', redirectTo: 'home', pathMatch: 'full' },

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
