import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteTabularComponent } from './site-tabular.component';

describe('SiteTabularComponent', () => {
  let component: SiteTabularComponent;
  let fixture: ComponentFixture<SiteTabularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteTabularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteTabularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
