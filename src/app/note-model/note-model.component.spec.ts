import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteModelComponent } from './note-model.component';

describe('NoteModelComponent', () => {
  let component: NoteModelComponent;
  let fixture: ComponentFixture<NoteModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
