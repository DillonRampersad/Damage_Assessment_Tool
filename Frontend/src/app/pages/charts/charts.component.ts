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
      let areaCode = res.map(res=>res.areaCode)
      let inoperEqu = res.map(res=>res.inoperEqu)
      let operEqu = res.map(res=>res.operEqu)
      let date = res.map(res=>res.eventDate)
      
      let Dates = []
      date.forEach((res) => {
        let jsdate = new Date(res)
        Dates.push(jsdate.toLocaleTimeString('en', {year: 'numeric', month: 'short', day:'numeric' }))
        
      });
      console.log(operEqu)
      console.log(Dates)
      console.log(areaCode)
      console.log(inoperEqu)

/*
      const chart = new Chart('canvas',{
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
                  xAxes: [
                    {
                      ticks: {
                        display: true
                       }
                    }
                  ],
                  yAxes: [
                    {
                      ticks: {
                        display: true
                       }
                    }
                  ]
                 }
              }
        })*/
      })
      
  }
}