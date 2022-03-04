import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PreFacService } from 'src/app/service/pre-fac.service';
import { PreFac } from 'src/app/models/preFac.interface';

@Component({
  selector: 'app-pre-fac-view',
  templateUrl: './pre-fac-view.component.html',
  styleUrls: ['./pre-fac-view.component.css']
})
export class PreFacViewComponent implements OnInit {
  prefacility: PreFac[] = [];

  constructor(private router: Router, private preequ : PreFacService) { }

  delete(id){
    console.log(id);
    this.preequ.deletePreFacForm(id).subscribe((res)=>{
      console.log(res);
    });
    window .location.reload();
  }

  ngOnInit(): void {
    this.preequ.getPreFacForm().subscribe((preFac: PreFac[]) => {
      this.prefacility = preFac;
    })
  }

}
