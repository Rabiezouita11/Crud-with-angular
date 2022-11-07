import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoodyComponent } from './boody.component';

describe('BoodyComponent', () => {
  let component: BoodyComponent;
  let fixture: ComponentFixture<BoodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
