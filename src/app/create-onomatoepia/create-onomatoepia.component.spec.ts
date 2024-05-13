import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOnomatoepiaComponent } from './create-onomatoepia.component';

describe('CreateOnomatoepiaComponent', () => {
  let component: CreateOnomatoepiaComponent;
  let fixture: ComponentFixture<CreateOnomatoepiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOnomatoepiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOnomatoepiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
