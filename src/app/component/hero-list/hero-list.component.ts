import { ActivatedRoute, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit {
  heroes: Array<any> = [];
  formHero: any = {
    id: '',
    name: '',
    avatar: '',
    gender: 'Nữ',
  };
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/heroes').subscribe((data) => {
      this.heroes = data;
    });
  }

  title = 'we16302';

  remove(hero: any) {
    console.log(hero.id);

    this.http
      .delete<any>(`http://localhost:3000/heroes/${hero.id}`)
      .subscribe((data) => {
        this.heroes = this.heroes.filter((item) => item.id != hero.id);
      });
  }
  update(item: any) {
    this.formHero = { ...item };
  }
  submitForm() {
    const newHero = { ...this.formHero };
    if (newHero.id == '') {
      this.http
        .post('http://localhost:3000/heroes/', newHero)
        .subscribe((data) => {
          this.heroes.push(data);
        });
    } else {
      this.http
        .put(`http://localhost:3000/heroes/${newHero.id}`, newHero)
        .subscribe((data) => {
          let index = -1;
          this.heroes.forEach((e, i) => {
            if (newHero.id === e.id) {
              index = i;
            }
          });
          this.heroes[index] = data;
        });
    }
    // this.heroes.push(newHero);
    // let index = -1;
    // this.heroes.forEach((value, i) => {
    //   if (value.code == newHero.code) {
    //     index = i;
    //     return;
    //   }
    // });
    // if (index == -1) {
    //   this.heroes.push(newHero);
    // } else {
    //   this.heroes[index] = newHero;
    // }

    this.formHero = {
      code: '',
      name: '',
      avatar: '',
      gender: 'Nữ',
    };
  }
}
