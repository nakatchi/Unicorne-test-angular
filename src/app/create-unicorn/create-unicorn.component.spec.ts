import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUnicornComponent } from './create-unicorn.component';

describe('CreateUnicornComponent', () => {
  let component: CreateUnicornComponent;
  let fixture: ComponentFixture<CreateUnicornComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUnicornComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUnicornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
