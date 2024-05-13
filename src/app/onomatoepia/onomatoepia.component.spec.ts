import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnomatoepiaComponent } from './onomatoepia.component';

describe('OnomatoepiaComponent', () => {
  let component: OnomatoepiaComponent;
  let fixture: ComponentFixture<OnomatoepiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnomatoepiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnomatoepiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
