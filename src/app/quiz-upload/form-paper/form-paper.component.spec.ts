import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPaperComponent } from './form-paper.component';

describe('FormPaperComponent', () => {
  let component: FormPaperComponent;
  let fixture: ComponentFixture<FormPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
