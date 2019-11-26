import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilLeftbarComponent } from './profil-leftbar.component';

describe('ProfilLeftbarComponent', () => {
  let component: ProfilLeftbarComponent;
  let fixture: ComponentFixture<ProfilLeftbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilLeftbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilLeftbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
