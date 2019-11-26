import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCenterPollComponent } from './profil-center-poll.component';

describe('ProfilCenterPollComponent', () => {
  let component: ProfilCenterPollComponent;
  let fixture: ComponentFixture<ProfilCenterPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilCenterPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilCenterPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
