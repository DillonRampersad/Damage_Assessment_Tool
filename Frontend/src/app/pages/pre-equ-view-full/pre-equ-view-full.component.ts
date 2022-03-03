import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PreEquService } from 'src/app/service/pre-equ.service';
import { PreEqu } from 'src/app/models/preEqu.interface';

@Component({
  selector: 'app-pre-equ-view-full',
  templateUrl: './pre-equ-view-full.component.html',
  styleUrls: ['./pre-equ-view-full.component.css']
})
export class PreEquViewFullComponent implements OnInit {
  preequipm: PreEqu[] = [];

  formID: string;
  getparamformid: any;
  preequip: any;
  constructor(private route: ActivatedRoute, private preequ : PreEquService) { }

  ngOnInit(): void {
    console.log(
      this.route.snapshot.paramMap.get('preequviewid'),
      ' : ID of report'
    );
    this.getparamformid = this.route.snapshot.paramMap.get('preequviewid');
    this.preequ.getOnePreEquForm(this.getparamformid).subscribe((PreEquipment: PreEqu[]) => {
        this.preequip = PreEquipment;
        console.log(PreEquipment, 'response of form');
      });
  }
  

}
