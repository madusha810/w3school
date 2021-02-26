import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavjavascriptComponent } from './sidenavjavascript.component';

describe('SidenavjavascriptComponent', () => {
  let component: SidenavjavascriptComponent;
  let fixture: ComponentFixture<SidenavjavascriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavjavascriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavjavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
