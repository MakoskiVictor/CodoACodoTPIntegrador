import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiperlinkComponent } from './hiperlink.component';

describe('HiperlinkComponent', () => {
  let component: HiperlinkComponent;
  let fixture: ComponentFixture<HiperlinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HiperlinkComponent]
    });
    fixture = TestBed.createComponent(HiperlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
