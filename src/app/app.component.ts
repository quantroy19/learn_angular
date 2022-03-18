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
}
