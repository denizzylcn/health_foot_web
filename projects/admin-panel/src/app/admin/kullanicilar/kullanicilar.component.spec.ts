import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KullanicilarComponent } from './kullanicilar.component';

describe('KullanicilarComponent', () => {
  let component: KullanicilarComponent;
  let fixture: ComponentFixture<KullanicilarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KullanicilarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KullanicilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
