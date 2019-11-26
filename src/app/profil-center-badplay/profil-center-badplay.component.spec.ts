import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCenterBadplayComponent } from './profil-center-badplay.component';

describe('ProfilCenterBadplayComponent', () => {
  let component: ProfilCenterBadplayComponent;
  let fixture: ComponentFixture<ProfilCenterBadplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilCenterBadplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilCenterBadplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
