import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SportService } from '@service/sport.service';
import { of } from 'rxjs';

import { ManageSportsComponent } from './manage-sports.component';

describe('ManageSportsComponent', () => {
  let component: ManageSportsComponent;
  let fixture: ComponentFixture<ManageSportsComponent>;

  const mockSportsService = {
    getAllSports() {
      return of([]);
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule
      ],
      declarations: [ManageSportsComponent],
      providers: [
        { provide: SportService, useValue: mockSportsService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
