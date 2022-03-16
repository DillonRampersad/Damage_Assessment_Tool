import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DAFormFac } from 'src/app/models/daformfac.interface';
import { DaformfacserviceService } from 'src/app/service/daformfacservice.service';

@Component({
  selector: 'app-ad-daform-fac-view-full',
  templateUrl: './ad-daform-fac-view-full.component.html',
  styleUrls: ['./ad-daform-fac-view-full.component.css']
})
export class AdDaformFacViewFullComponent implements OnInit {
  daformfac: DAFormFac[] = [];

  formID: string;
  getparamformid: any;
  daformfacs: any;

  constructor(
    private daformfacservice: DaformfacserviceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(
      this.route.snapshot.paramMap.get('facviewid'),
      ' : ID of report'
    );
    this.getparamformid = this.route.snapshot.paramMap.get('facviewid');
    this.daformfacservice.getOneDAFacForm(this.getparamformid).subscribe((daFormFac: DAFormFac[]) => {
        this.daformfacs = daFormFac;
        console.log(daFormFac, 'response of form');
      });
  }
}
