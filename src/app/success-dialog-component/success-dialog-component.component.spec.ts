import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessDialogComponentComponent } from './success-dialog-component.component';

describe('SuccessDialogComponentComponent', () => {
  let component: SuccessDialogComponentComponent;
  let fixture: ComponentFixture<SuccessDialogComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessDialogComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
