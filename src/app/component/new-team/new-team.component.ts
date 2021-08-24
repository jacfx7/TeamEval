import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { TeamService } from '@service/team.service';
import { Sport } from '@model/Sport';
import { Team } from '@model/Team';

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.scss']
})
export class NewTeamComponent implements OnInit {
  formGroup: FormGroup;

  @Input() sport: Sport | undefined;
  @Output() saveComplete = new EventEmitter();

  constructor(private fb: FormBuilder, private teamService: TeamService, private toastr: ToastrService) {
    this.formGroup = this.fb.group({
      teamName: ['', [Validators.required]],
      ageLevel: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  get teamName() {
    return this.formGroup.get('teamName');
  }

  get ageLevel() {
    return this.formGroup.get('ageLevel');
  }

  saveTeam() {
    if (this.sport === undefined) {
      return;
    }
    const team: Team = {
      id: '',
      name: this.teamName?.value,
      ageLevel: this.ageLevel?.value,
      sport: this.sport
    };
    this.teamService.saveTeam(team).then(res => {
      debugger;
      this.toastr.success('New team created');
      this.saveComplete.emit(true);
    });
  }
}
