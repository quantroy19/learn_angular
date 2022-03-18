import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-hoc',
  templateUrl: './mon-hoc.component.html',
  styleUrls: ['./mon-hoc.component.css'],
})
export class MonHocComponent implements OnInit {
  listSubjects = [
    {
      id: 1,
      name: 'front end framework',
    },
    {
      id: 2,
      name: 'Laravel',
    },
    {
      id: 3,
      name: 'PHP2',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
