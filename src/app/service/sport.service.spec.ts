import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore'

import { SportService } from './sport.service';

describe('SportService', () => {
  let service: SportService;

  const mockCollection = {
    valueChanges: jasmine.createSpy('valueChanges').and.returnValue({})
  }

  const mockAngularFirestore = {
    collection: jasmine.createSpy('collection').and.returnValue(mockCollection)
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AngularFirestore, useValue: mockAngularFirestore }
      ]
    });
    service = TestBed.inject(SportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
