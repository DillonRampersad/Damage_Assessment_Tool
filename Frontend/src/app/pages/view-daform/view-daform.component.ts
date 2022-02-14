import { Component, OnInit, ViewChild } from '@angular/core';
import { DamageAssessmentReportService } from 'src/app/service/damage-assessment-report.service';
import { DAForm } from 'src/app/models/daform.interface';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-view-daform',
  templateUrl: './view-daform.component.html',
  styleUrls: ['./view-daform.component.css'],
})
export class ViewDaformComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor(private damageAssessmentService: DamageAssessmentReportService) {}
  //daform : DAForm[]

  daform: DAForm[] = [
    {
      _id: 'Test ID',
      author1: 'Test Author',
      organizationName1: 'Test Organization Name',
      facilityName1: 'Test Facility Name',
      facilityDamage1: 'Test Facility Damage',
      eventName1: 'Test Event Name',
      eventDate1: new Date(2020, 9, 10),
      area1: 'Test Area',
      surroundingDamage1: 'Test Surrounding Damage',
      disasterNature1: 'Test Disaster Nature',
      threatLevel1: 'Test Threat Level',
      equipmentName1: 'Test Equipment Name',
      equipmentType1: 'Test Equipment Type',
      modelNumber1: 'Test Model No',
      manufacturer1: 'Test Manufacturer',
      equipmentDamage1: 'Test Equipment Damage',
    },
  ];

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  
  ngOnInit(): void {
    this.damageAssessmentService.getDAForm().subscribe((form: DAForm[]) => {
      this.daform = form;
    });
  }
}
