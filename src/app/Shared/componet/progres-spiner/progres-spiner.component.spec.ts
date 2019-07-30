import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresSpinerComponent } from './progres-spiner.component';

describe('ProgresSpinerComponent', () => {
  let component: ProgresSpinerComponent;
  let fixture: ComponentFixture<ProgresSpinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgresSpinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgresSpinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
