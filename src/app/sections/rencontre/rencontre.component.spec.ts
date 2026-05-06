import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RencontreComponent } from './rencontre.component';

describe('RencontreComponent', () => {
  let component: RencontreComponent;
  let fixture: ComponentFixture<RencontreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RencontreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RencontreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
