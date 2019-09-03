import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'panneaux', loadChildren: './panneaux/panneaux.module#PanneauxPageModule' },
  { path: 'quiz', loadChildren: './quiz/quiz.module#QuizPageModule' },
  { path: 'categorie', loadChildren: './categorie/categorie.module#CategoriePageModule' },
  { path: 'preference', loadChildren: './preference/preference.module#PreferencePageModule' },
  { path: 'detail-category', loadChildren: './detail-category/detail-category.module#DetailCategoryPageModule' },
  { path: 'detail-category', loadChildren: './detail-category/detail-category.module#DetailCategoryPageModule' },
  { path: 'quiz-question', loadChildren: './quiz-question/quiz-question.module#QuizQuestionPageModule' },
  { path: 'quiz-result', loadChildren: './quiz-result/quiz-result.module#QuizResultPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
