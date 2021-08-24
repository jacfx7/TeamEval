import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SportService } from '@service/sport.service';
import { Sport } from '@model/Sport';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-sports',
  templateUrl: './manage-sports.component.html',
  styleUrls: ['./manage-sports.component.scss']
})
export class ManageSportsComponent implements OnInit {
  formGroup: FormGroup;
  allSport: any[] = [];
  selectedSport?: Sport;

  constructor(private fb: FormBuilder, private sportService: SportService,
    public router: Router) {
    this.formGroup = this.fb.group({
      sportName: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getAllSports();
  }

  get sportName() {
    return this.formGroup.get('sportName');
  }

  getAllSports = () => {
    this.sportService.getAllSports().subscribe(res => {
      this.allSport = res.map(e => {
        const data = e.payload.doc.data() as Sport;
        data.id = e.payload.doc.id;
        return data;
      })
    });
  }

  addNewSport(newSportName: string) {
    const sport: Sport = { name: newSportName, id: '' }
    this.sportService.createNewSport(sport).then(res => {

    })
  }

  manageTeams() {
    if (this.selectedSport) {
      localStorage.setItem('sport', JSON.stringify(this.selectedSport));
      this.router.navigate(['dashboard']);
    }
  }
}
