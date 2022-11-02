import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtomsheetComponent } from './buttomsheet.component';

describe('ButtomsheetComponent', () => {
  let component: ButtomsheetComponent;
  let fixture: ComponentFixture<ButtomsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtomsheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtomsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
