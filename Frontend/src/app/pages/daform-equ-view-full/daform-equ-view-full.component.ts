import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DAFormEqu } from 'src/app/models/daformequ.interface';
import { DaformequService } from 'src/app/service/daformequ.service';

@Component({
  selector: 'app-daform-equ-view-full',
  templateUrl: './daform-equ-view-full.component.html',
  styleUrls: ['./daform-equ-view-full.component.css']
})
export class DaformEquViewFullComponent implements OnInit {
  daformequ: DAFormEqu[] = [];

  formID: string;
  getparamformid: any;
  daformequi: any;

  constructor(
    private daformequip: DaformequService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(
      this.route.snapshot.paramMap.get('equviewid'),
      ' : ID of report'
    );
    this.getparamformid = this.route.snapshot.paramMap.get('equviewid');
    this.daformequip.getOneDAEquForm(this.getparamformid).subscribe((daFormEqu: DAFormEqu[]) => {
        this.daformequi = daFormEqu;
        console.log(daFormEqu, 'response of form');
      });
  }
  

}
