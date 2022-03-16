import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PreEquService } from 'src/app/service/pre-equ.service';
import { PreEqu } from 'src/app/models/preEqu.interface';

@Component({
  selector: 'app-ad-pre-equ-view',
  templateUrl: './ad-pre-equ-view.component.html',
  styleUrls: ['./ad-pre-equ-view.component.css']
})
export class AdPreEquViewComponent implements OnInit {
  preequip: PreEqu[] = [];

  constructor(private router: Router, private preequ : PreEquService) { }

  delete(id){
    console.log(id);
    this.preequ.deletePreEquForm(id).subscribe((res)=>{
      console.log(res);
    });
    window .location.reload();
  }

  ngOnInit(): void {
    this.preequ.getPreEquForm().subscribe((preEqu: PreEqu[]) => {
      this.preequip = preEqu;
    })
  }

}
