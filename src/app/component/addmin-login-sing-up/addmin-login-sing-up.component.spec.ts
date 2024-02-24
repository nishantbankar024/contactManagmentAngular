import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddminLoginSingUpComponent } from './addmin-login-sing-up.component';

describe('AddminLoginSingUpComponent', () => {
  let component: AddminLoginSingUpComponent;
  let fixture: ComponentFixture<AddminLoginSingUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddminLoginSingUpComponent]
    });
    fixture = TestBed.createComponent(AddminLoginSingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
