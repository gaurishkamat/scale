import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanillaFormComponent } from './vanilla-form.component';

describe('VanillaFormComponent', () => {
  let component: VanillaFormComponent;
  let fixture: ComponentFixture<VanillaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VanillaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VanillaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
