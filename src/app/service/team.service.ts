import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Sport } from '@model/Sport';
import { Team } from '@model/Team';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  collectionName: string = "Teams";

  constructor(private afs: AngularFirestore, private toastr: ToastrService) { }

  getAllTeams(sport: Sport) {
    return this.afs.collection(this.collectionName, ref => ref.where('sport.id', '==', sport.id).orderBy('name')).snapshotChanges();
  }

  saveTeam(newTeam: Team) {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection<Team>(this.collectionName)
        .add(newTeam)
        .then(response => { resolve(response) }, error => reject(error));
    });
  }
}
