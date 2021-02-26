import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavphpComponent } from './sidenavphp.component';

describe('SidenavphpComponent', () => {
  let component: SidenavphpComponent;
  let fixture: ComponentFixture<SidenavphpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavphpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavphpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
