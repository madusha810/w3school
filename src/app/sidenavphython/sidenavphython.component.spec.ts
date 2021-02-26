import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavphythonComponent } from './sidenavphython.component';

describe('SidenavphythonComponent', () => {
  let component: SidenavphythonComponent;
  let fixture: ComponentFixture<SidenavphythonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavphythonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavphythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
