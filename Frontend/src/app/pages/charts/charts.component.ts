import { Component, OnInit } from '@angular/core';
import { ChartsService } from 'src/app/service/charts.service';
import { Chart } from 'chart.js';
import { map } from 'rxjs';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  chart=[];
  constructor(private chartService : ChartsService) { }

  
  ngOnInit(): void {
    this.chartService.noOfEqu().subscribe(res=>{
      //console.log(res);
      //let areaCode = res['DAFacility'].pipe(map((res: {main: {areaCode: any};};)=>res.main.areaCode))
      let areaCode = res['list'].pipe(map((res: { areaCode: any; }) => res.areaCode))
      let inoperEqu = res['list'].map(res=>res.inoperEqu)
      let operEqu = res['list'].map(res=>res.operEqu)
      let date = res['list'].map(res=>res.eventDate)
      
      let Dates = []
      date.forEach((res) => {
        let jsdate = new Date(res *1000)
        Dates.push(jsdate.toLocaleTimeString('en', {year: 'numeric', month: 'short', day:'numeric' }))
        
      });
      console.log(areaCode)
      /*
      this.chart = new Chart('canvas',{
        type: 'line',
          data: {
            labels: areaCode,
            datasets: [
              {
                data: inoperEqu,
                borderColor: '#3cba9f',
                fill: false
              },
              {
                data: operEqu,
                borderColor: '#ffcc00',
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        })
*/
      })
  }
}
