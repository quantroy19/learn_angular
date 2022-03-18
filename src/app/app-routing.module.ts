import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { MonHocComponent } from './secreens/mon-hoc/mon-hoc.component';
import { QuizComponent } from './secreens/quiz/quiz.component';
import { LoginComponent } from './secreens/login/login.component';
import { HeroListComponent } from './component/hero-list/hero-list.component';
import { HeroItemComponent } from './component/hero-item/hero-item.component';
// import { HeroComponent } from './components/hero/hero.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './secreens/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'mon-hoc',
        component: MonHocComponent,
      },
      {
        path: 'quiz/:id-monhoc',
        component: QuizComponent,
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'list-hero', component: HeroListComponent },
  { path: 'edit-hero/:id', component: HeroItemComponent },
  { path: 'quiz/:id-monhoc', component: QuizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
