import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonComponent } from './dragon.component';

describe('DragonComponent', () => {
  let component: DragonComponent;
  let fixture: ComponentFixture<DragonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
