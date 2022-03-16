import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreFac } from 'src/app/models/preFac.interface';
import { PreFacService } from 'src/app/service/pre-fac.service';

@Component({
  selector: 'app-ad-pre-fac-view-full',
  templateUrl: './ad-pre-fac-view-full.component.html',
  styleUrls: ['./ad-pre-fac-view-full.component.css']
})
export class AdPreFacViewFullComponent implements OnInit {
  prefacility: PreFac[] = [];

  formID: string;
  getparamformid: any;
  prefacili: any;
  constructor(private route: ActivatedRoute, private prefac : PreFacService) { }

  ngOnInit(): void {
    console.log(
      this.route.snapshot.paramMap.get('preequviewid'),
      ' : ID of report'
    );
    this.getparamformid = this.route.snapshot.paramMap.get('preequviewid');
    this.prefac.getOnePreFacForm(this.getparamformid).subscribe((PreFacility: PreFac[]) => {
        this.prefacili = PreFacility;
        console.log(PreFacility, 'response of form');
      });
  }

}
