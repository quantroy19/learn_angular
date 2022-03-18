import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenderPipe } from './helper/pipe/gender.pipe';
import { HeroFormComponent } from './component/hero-form/hero-form.component';
import { HeroListComponent } from './component/hero-list/hero-list.component';
import { HomeComponent } from './secreens/home/home.component';
import { LoginComponent } from './secreens/login/login.component';
// import { HeroItemComponent } from './component/hero-item/hero-item.component';
import { HeroItemComponent } from './component/hero-item/hero-item.component';
import { MonHocComponent } from './secreens/mon-hoc/mon-hoc.component';
import { QuizComponent } from './secreens/quiz/quiz.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    GenderPipe,
    HeroItemComponent,
    HeroFormComponent,
    HeroListComponent,
    HomeComponent,
    LoginComponent,
    MonHocComponent,
    QuizComponent,
    HomeLayoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
