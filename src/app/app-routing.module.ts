import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "collections",
    loadChildren: () => import('./collections/collections.module')
      .then(f=>f.CollectionsModule)
  },
  {
    path: "auth",
    loadChildren: () => import('./auth/auth.module')
      .then(f=>f.AuthModule)
  },
  {
    path: "home",
    loadChildren: () => import('./home-page/home-page.module')
      .then(f=>f.HomePageModule),
  },
  {
    path: "learningMode",
    loadChildren: () => import('./learning-mode/learning-mode.module')
      .then(f=>f.LearningModeModule),
  },
  {
    path: "test-mode",
    loadChildren: () => import('./test-mode/test-mode.module')
      .then(f=>f.TestModeModule)
  },
  {
    path: '',  redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: "exercise-mode",
    loadChildren: () => import('./exercise-mode/exercise-mode.module')
      .then(f=>f.ExerciseModeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
