import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudnetComponent } from './studnet.component';

describe('StudnetComponent', () => {
  let component: StudnetComponent;
  let fixture: ComponentFixture<StudnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
