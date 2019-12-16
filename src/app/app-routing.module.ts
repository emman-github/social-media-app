import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'contributor-reviews', pathMatch: 'full' },
  { path: 'contributor-reviews', loadChildren: './layout/contributor-reviews/contributor-reviews.module#ContributorReviewsPageModule' },
  { path: 'class', loadChildren: './layout/class/class.module#ClassPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
