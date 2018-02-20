import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGalleriesComponent } from './create-galleries.component';

describe('CreateGalleriesComponent', () => {
  let component: CreateGalleriesComponent;
  let fixture: ComponentFixture<CreateGalleriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGalleriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGalleriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
