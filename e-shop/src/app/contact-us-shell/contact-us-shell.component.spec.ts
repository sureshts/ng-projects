import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsShellComponent } from './contact-us-shell.component';

describe('ContactUsShellComponent', () => {
  let component: ContactUsShellComponent;
  let fixture: ComponentFixture<ContactUsShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
