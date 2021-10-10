import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { SignOutComponent } from './sign-out.component';
import mockAngularFireAuth from '@root/app/mock/mockAngularFireAuth';
import mockAngularFireStore from '@root/app/mock/mockAngularFireStore';
import { AuthService } from '@service/auth.service';

describe('SignOutComponent', () => {
  let component: SignOutComponent;
  let fixture: ComponentFixture<SignOutComponent>;

  const mockAuthService = {
    SignOut() {

    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignOutComponent],
      providers: [
        { provide: AngularFirestore, useValue: mockAngularFireStore },
        { provide: AngularFireAuth, useValue: mockAngularFireAuth },
        { provide: AuthService, useValue: mockAuthService },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
