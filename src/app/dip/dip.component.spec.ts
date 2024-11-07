import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipComponent } from './dip.component';

describe('DipComponent', () => {
  let component: DipComponent;
  let fixture: ComponentFixture<DipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
