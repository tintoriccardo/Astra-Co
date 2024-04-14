import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazzoComponent } from './razzo.component';

describe('RazzoComponent', () => {
  let component: RazzoComponent;
  let fixture: ComponentFixture<RazzoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RazzoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RazzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
