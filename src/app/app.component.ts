import { Component, OnInit } from '@angular/core';
// import { Component,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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
    // console.log(hero.id);

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

  // emenies: Array<any> = [
  //   {
  //     code: '011',
  //     name: 'Cat',
  //     avatar:
  //       'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/330px-Cat_November_2010-1a.jpg',
  //     heathling: 100,
  //     amour: 50,
  //   },
  //   {
  //     code: '007',
  //     name: 'Dog',
  //     avatar:
  //       'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*',
  //     heathling: 200,
  //     amour: 60,
  //   },
  //   {
  //     code: 'quan',
  //     name: 'quanquan',
  //     avatar:
  //       'https://techvccloud.mediacdn.vn/zoom/600_315/2020/8/26/hacker-la-gi-1-1598432112870114396334-crop-15984321933331491192666.jpg',
  //     heathling: '100',
  //     amour: 20,
  //   },
  // ];
  // formEmenies: any = {
  //   code: '',
  //   name: '',
  //   avatar: '',
  //   heathling: '',
  //   amour: '',
  // };

  // submitFormQuai() {
  //   const newEneny = { ...this.formEmenies };
  //   let index = -1;
  //   this.emenies.forEach((e, i) => {
  //     if (newEneny.code == e.code) {
  //       index = i;
  //       return;
  //     }
  //   });
  //   if (index == -1) {
  //     this.emenies.push(newEneny);
  //   } else {
  //     this.emenies[index] = newEneny;
  //   }

  //   this.formEmenies = {
  //     code: '',
  //     name: '',
  //     avatar: '',
  //     heathling: '',
  //     amour: '',
  //   };
  // }
  // updateQuai(quai: any) {
  //   this.formEmenies = quai;
  // }
  // removeQuai(quai: any) {
  //   // console.log(hero);
  //   this.emenies = this.emenies.filter((item) => item.code != quai.code);
  // }
}
