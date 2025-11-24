import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeesingledataComponent } from './seesingledata.component';

describe('SeesingledataComponent', () => {
  let component: SeesingledataComponent;
  let fixture: ComponentFixture<SeesingledataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeesingledataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeesingledataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
