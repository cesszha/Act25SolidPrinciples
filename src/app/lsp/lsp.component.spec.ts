import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LspComponent } from './lsp.component';

describe('LspComponent', () => {
  let component: LspComponent;
  let fixture: ComponentFixture<LspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LspComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
