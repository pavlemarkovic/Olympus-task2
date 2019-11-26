import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilRightbarComponent } from './profil-rightbar.component';

describe('ProfilRightbarComponent', () => {
  let component: ProfilRightbarComponent;
  let fixture: ComponentFixture<ProfilRightbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilRightbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilRightbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
