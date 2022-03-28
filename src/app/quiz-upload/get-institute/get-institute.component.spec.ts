import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInstituteComponent } from './get-institute.component';

describe('GetInstituteComponent', () => {
  let component: GetInstituteComponent;
  let fixture: ComponentFixture<GetInstituteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetInstituteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
