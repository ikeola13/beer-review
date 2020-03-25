import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'create-post',
        loadChildren: () => import('../create-post/create-post.module').then(m => m.CreatePostPageModule)
      },
      {
        path: 'view-post',
        loadChildren: () => import('../view-post/view-post.module').then(m => m.ViewPostPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
      },

      {
        path: 'my-posts',
        loadChildren: () => import('../my-posts/my-posts.module').then(m => m.MyPostsPageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../search/search.module').then(m => m.SearchPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      }, {
        path: 'edit-post',
        loadChildren: () => import('../edit-post/edit-post.module').then(m => m.EditPostPageModule)
      }
    ]
  }
];

// { path: '', redirectTo: 'home', pathMatch: 'full' },

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule { }
