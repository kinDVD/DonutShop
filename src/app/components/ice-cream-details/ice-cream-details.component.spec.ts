import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IceCreamDetailsComponent } from './ice-cream-details.component';

describe('IceCreamDetailsComponent', () => {
  let component: IceCreamDetailsComponent;
  let fixture: ComponentFixture<IceCreamDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IceCreamDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IceCreamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
