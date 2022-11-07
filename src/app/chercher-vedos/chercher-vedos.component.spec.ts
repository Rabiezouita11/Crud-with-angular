import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChercherVedosComponent } from './chercher-vedos.component';

describe('ChercherVedosComponent', () => {
  let component: ChercherVedosComponent;
  let fixture: ComponentFixture<ChercherVedosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChercherVedosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChercherVedosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
