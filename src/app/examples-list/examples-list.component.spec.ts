import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplesListModule } from './examples-list.module';
import { ExamplesListComponent } from './examples-list.component';

describe('ExamplesListComponent', () => {
  let component: ExamplesListComponent;
  let fixture: ComponentFixture<ExamplesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ExamplesListModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
