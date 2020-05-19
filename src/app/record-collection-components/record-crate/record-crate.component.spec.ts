import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordCrateComponent } from './record-crate.component';

describe('RecordCrateComponent', () => {
  let component: RecordCrateComponent;
  let fixture: ComponentFixture<RecordCrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordCrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordCrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
