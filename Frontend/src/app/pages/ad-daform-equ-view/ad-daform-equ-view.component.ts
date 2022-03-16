import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { DAFormEqu } from 'src/app/models/daformequ.interface';
import { DaformequService } from 'src/app/service/daformequ.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad-daform-equ-view',
  templateUrl: './ad-daform-equ-view.component.html',
  styleUrls: ['./ad-daform-equ-view.component.css']
})
export class AdDaformEquViewComponent implements OnInit {
  
  @ViewChild(MatAccordion) accordion: MatAccordion;
daformequ: DAFormEqu[] = [];

  constructor(private daformequser: DaformequService, private router: Router) { }


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

  delete(id){
    console.log(id);
    this.daformequser.deleteDAEquForm(id).subscribe((res)=>{
      console.log(res);
    });
    window .location.reload();
  }
  
  ngOnInit(): void {
    this.daformequser.getDAEquForm().subscribe((daFormEqu: DAFormEqu[]) => {
      this.daformequ = daFormEqu;
    })
  }

}
