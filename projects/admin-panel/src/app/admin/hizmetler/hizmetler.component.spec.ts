import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HizmetlerComponent } from './hizmetler.component';

describe('HizmetlerComponent', () => {
  let component: HizmetlerComponent;
  let fixture: ComponentFixture<HizmetlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HizmetlerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HizmetlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
