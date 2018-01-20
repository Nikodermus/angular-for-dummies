import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeverCreatorComponent } from './sever-creator.component';

describe('SeverCreatorComponent', () => {
  let component: SeverCreatorComponent;
  let fixture: ComponentFixture<SeverCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeverCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeverCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
