import { TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';

import { AuthGuard } from './auth.guard';
import mockAngularFireAuth from '@root/app/mock/mockAngularFireAuth';
import mockAngularFireStore from '@root/app/mock/mockAngularFireStore';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ToastrModule.forRoot(),
      ],
      providers: [
        { provide: AngularFirestore, useValue: mockAngularFireStore },
        { provide: AngularFireAuth, useValue: mockAngularFireAuth },
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
