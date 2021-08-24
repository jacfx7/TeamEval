import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Sport } from '@model/Sport';

@Injectable({
  providedIn: 'root'
})
export class SportService {
  collectionName: string = 'Sports';

  constructor(private firestore: AngularFirestore) { }

  getAllSports() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  getSportByName(sportName: string) {
    return this.firestore.collection(this.collectionName).get();
  }

  createNewSport(data: Sport) {
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection(this.collectionName).add(data).then(res => {
        debugger;
      }, err => reject(err));
    })
  }
}
