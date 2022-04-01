import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoBabyComponent } from './do-baby.component';

describe('DoBabyComponent', () => {
  let component: DoBabyComponent;
  let fixture: ComponentFixture<DoBabyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoBabyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoBabyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
