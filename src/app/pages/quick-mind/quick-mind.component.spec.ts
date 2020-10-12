import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickMindComponent } from './quick-mind.component';

describe('QuickMindComponent', () => {
  let component: QuickMindComponent;
  let fixture: ComponentFixture<QuickMindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickMindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickMindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
