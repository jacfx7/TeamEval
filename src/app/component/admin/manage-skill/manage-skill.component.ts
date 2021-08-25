import { Component, OnInit, Input } from '@angular/core';
import { Team } from '@model/Team';

@Component({
  selector: 'app-manage-skill',
  templateUrl: './manage-skill.component.html',
  styleUrls: ['./manage-skill.component.scss']
})
export class ManageSkillComponent implements OnInit {
  @Input() team: Team | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
