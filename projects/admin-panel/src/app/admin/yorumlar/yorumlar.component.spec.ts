import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YorumlarComponent } from './yorumlar.component';

describe('YorumlarComponent', () => {
  let component: YorumlarComponent;
  let fixture: ComponentFixture<YorumlarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YorumlarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YorumlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
