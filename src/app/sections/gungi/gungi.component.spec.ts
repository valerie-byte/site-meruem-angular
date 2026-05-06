import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GungiComponent } from './gungi.component';

describe('GungiComponent', () => {
  let component: GungiComponent;
  let fixture: ComponentFixture<GungiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GungiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GungiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
