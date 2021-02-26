import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfofileComponent } from './pfofile.component';

describe('PfofileComponent', () => {
  let component: PfofileComponent;
  let fixture: ComponentFixture<PfofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
