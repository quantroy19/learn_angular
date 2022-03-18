import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  idMonhoc = 0;
  ngOnInit(): void {
    this.idMonhoc = Number(this.route.snapshot.paramMap.get('id-monhoc'));
  }
}
