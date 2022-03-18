import { Routes, ActivatedRoute } from '@angular/router';
import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css'],
})
export class HeroItemComponent implements OnInit {
  @Input('heroData') heroData: any;
  @Output('removeHero') removeEvent = new EventEmitter();
  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    let heroId = null;
    heroId = this.activeRoute.snapshot.paramMap.get('id');
    console.log(heroId);
  }
  remove(): void {
    this.removeEvent.emit(this.heroData);
    // console.log(1);
  }
}
