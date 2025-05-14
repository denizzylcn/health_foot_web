import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandevuComponent } from './randevu.component';

describe('RandevuComponent', () => {
  let component: RandevuComponent;
  let fixture: ComponentFixture<RandevuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandevuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandevuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
