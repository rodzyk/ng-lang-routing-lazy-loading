import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSpecialComponent } from './child-special.component';

describe('ChildSpecialComponent', () => {
  let component: ChildSpecialComponent;
  let fixture: ComponentFixture<ChildSpecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildSpecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
