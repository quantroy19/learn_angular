import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'we16302';
  // name = 'Đỗ Minh Quân';
  // date = '28/05/2002';
  // gender = 'Nam';
  // GPA = '8.0';
  // changeTitle(e: any) {
  //   this.title = e.target.value;
  // }
  // changeName(e: any) {
  //   console.log(e.targetn);

  //   this.name = e.target.value;
  // }
  // changeDate(e: any) {
  //   // name = '';
  //   this.date = e.target.value;
  // }
  // changeGender(e: any) {
  //   // name = '';
  //   this.gender = e.target.value;
  // }
  // changeGPA(e: any) {
  //   // name = '';
  //   this.GPA = e.target.value;
  // }

  heroes: Array<any> = [
    {
      code: 'sgk',
      name: 'Songoku',
      avatar:
        'https://i.pinimg.com/736x/d7/bd/23/d7bd2389fd03889edc309504c3377409.jpg',
      gender: 'Nam',
    },
    {
      code: 'mab',
      name: 'Ma bư',
      avatar:
        'https://snkrvn.com/wp-content/uploads/2018/01/maxresdefault-960x640.jpg',
      gender: 'Nữ',
    },
  ];
  formHero: any = {
    code: '',
    name: '',
    avatar: '',
    gender: 'Nữ',
  };
  remove(hero: any) {
    // console.log(hero);
    this.heroes = this.heroes.filter((item) => item.code != hero.code);
  }
  update(item: any) {
    this.formHero = { ...item };
  }
  submitForm() {
    const newHero = { ...this.formHero };
    // this.heroes.push(newHero);
    let index = -1;
    this.heroes.forEach((value, i) => {
      if (value.code == newHero.code) {
        index = i;
        return;
      }
    });
    if (index == -1) {
      this.heroes.push(newHero);
    } else {
      this.heroes[index] = newHero;
    }

    this.formHero = {
      code: '',
      name: '',
      avatar: '',
      gender: 'nữ',
    };
  }

  emenies: Array<any> = [
    {
      code: '011',
      name: 'Cat',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/330px-Cat_November_2010-1a.jpg',
      heathling: 100,
      amour: 50,
    },
    {
      code: '007',
      name: 'Dog',
      avatar:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*',
      heathling: 200,
      amour: 60,
    },
    {
      code: 'quan',
      name: 'quanquan',
      avatar:
        'https://techvccloud.mediacdn.vn/zoom/600_315/2020/8/26/hacker-la-gi-1-1598432112870114396334-crop-15984321933331491192666.jpg',
      heathling: '100',
      amour: 20,
    },
  ];
  formEmenies: any = {
    code: '',
    name: '',
    avatar: '',
    heathling: '',
    amour: '',
  };

  submitFormQuai() {
    const newEneny = { ...this.formEmenies };
    let index = -1;
    this.emenies.forEach((e, i) => {
      if (newEneny.code == e.code) {
        index = i;
        return;
      }
    });
    if (index == -1) {
      this.emenies.push(newEneny);
    } else {
      this.emenies[index] = newEneny;
    }

    this.formEmenies = {
      code: '',
      name: '',
      avatar: '',
      heathling: '',
      amour: '',
    };
  }
  updateQuai(quai: any) {
    this.formEmenies = quai;
  }
  removeQuai(quai: any) {
    // console.log(hero);
    this.emenies = this.emenies.filter((item) => item.code != quai.code);
  }
}
