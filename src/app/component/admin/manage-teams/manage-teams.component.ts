import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Sport } from '@model/Sport';
import { Team } from '@model/Team';
import { TeamService } from '@service/team.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-teams',
  templateUrl: './manage-teams.component.html',
  styleUrls: ['./manage-teams.component.scss']
})
export class ManageTeamsComponent implements OnInit {
  selectedSport: Sport | undefined;
  allTeams: Team[] = [];
  selectedTeam?: any;
  showAddNewTeam: boolean = false;

  constructor(private router: Router, private teamService: TeamService, private toastr: ToastrService) { }

  ngOnInit(): void {
    const sportData = localStorage.getItem('sport')
    if (sportData !== null) {
      this.selectedSport = JSON.parse(sportData);
    } else {
      this.router.navigate(['sports']);
    }
    this.getAllTeams();
  }

  getAllTeams() {
    if (this.selectedSport !== undefined) {
      this.teamService.getAllTeams(this.selectedSport).subscribe(res => {
        this.allTeams = res.map(e => {
          const data = e.payload.doc.data() as Team;
          data.id = e.payload.doc.id;
          return data;
        })
      })
    }
  }

  addNewTeam() {
    this.showAddNewTeam = true;
  }

  saveComplete(success: boolean) {
    if (success) {
      this.showAddNewTeam = false;
    }
  }
}
