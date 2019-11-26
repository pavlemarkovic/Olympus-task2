import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCenterStatusComponent } from './profil-center-status.component';

describe('ProfilCenterStatusComponent', () => {
  let component: ProfilCenterStatusComponent;
  let fixture: ComponentFixture<ProfilCenterStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilCenterStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilCenterStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
