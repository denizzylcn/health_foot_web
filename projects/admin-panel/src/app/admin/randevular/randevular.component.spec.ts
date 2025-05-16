import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandevularComponent } from './randevular.component';

describe('RandevularComponent', () => {
  let component: RandevularComponent;
  let fixture: ComponentFixture<RandevularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandevularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandevularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
