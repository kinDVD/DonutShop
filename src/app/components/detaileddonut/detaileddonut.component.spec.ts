import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaileddonutComponent } from './detaileddonut.component';

describe('DetaileddonutComponent', () => {
  let component: DetaileddonutComponent;
  let fixture: ComponentFixture<DetaileddonutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetaileddonutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaileddonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
