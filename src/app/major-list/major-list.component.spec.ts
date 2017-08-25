import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorListComponent } from './major-list.component';

describe('MajorListComponent', () => {
  let component: MajorListComponent;
  let fixture: ComponentFixture<MajorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
