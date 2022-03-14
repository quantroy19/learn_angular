import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuaiComponent } from './quai.component';

describe('QuaiComponent', () => {
  let component: QuaiComponent;
  let fixture: ComponentFixture<QuaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
