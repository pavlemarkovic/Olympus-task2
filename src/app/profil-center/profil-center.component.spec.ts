import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCenterComponent } from './profil-center.component';

describe('ProfilCenterComponent', () => {
  let component: ProfilCenterComponent;
  let fixture: ComponentFixture<ProfilCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
