import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopsPageComponent } from './workshops-page.component';

describe('WorkshopsPageComponent', () => {
  let component: WorkshopsPageComponent;
  let fixture: ComponentFixture<WorkshopsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkshopsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkshopsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
