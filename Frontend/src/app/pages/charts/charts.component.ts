import { Component, OnInit } from '@angular/core';
import { ChartsService } from 'src/app/service/charts.service';
import { Chart } from 'chart.js';
import { map } from 'rxjs';
import { AggregationService } from 'src/app/service/aggregation.service';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {
  chart = [];

  cisco;
  huawei;
  Jn;
  tele;

  constructor(private chartService: ChartsService, private aggregate: AggregationService) {}

  ngOnInit(): void {
    this.aggregate.Cisco().subscribe((c )=>{
      this.cisco=c;
      console.log(this.cisco);
    })
    this.aggregate.Huawei().subscribe((c )=>{
      this.cisco=c;
      console.log(this.huawei);
    })
    this.aggregate.JN().subscribe((c )=>{
      this.cisco=c;
      console.log(this.Jn);
    })
    this.aggregate.Tele().subscribe((c )=>{
      this.tele=c;
      console.log(this.tele);
    })
    this.chartService.noOfEqu().subscribe((res) => {
      let area = res.map((res) => res.area);
      let areaCode = res.map((res) => res.areaCode);
      let disaster = res.map((res) => res.disasterNature);
      let facility = res.map((res) => res.facilityName);
      let inoperEqu = res.map((res) => res.inoperEqu);
      let operEqu = res.map((res) => res.operEqu);
      let date = res.map((res) => res.eventDate);

      let Dates = [];
      date.forEach((res) => {
        let jsdate = new Date(res);
        Dates.push(
          jsdate.toLocaleTimeString('en', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })
        );
      });
      console.log(operEqu);
      console.log(Dates);
      console.log(area);
      console.log(inoperEqu);
      console.log(facility);
      console.log(disaster);

      new Chart('canvas', {
        type: 'bar',

        data: {
          labels: facility,
          datasets: [
            {
              data: inoperEqu,
              label: 'inoperable equ',
              backgroundColor: '#3cba9f',
            },
            {
              data: operEqu,
              label: 'operational equ',
              backgroundColor: '#ffcc00',
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: true,
            },
          },
          scales: {
            x: {
              ticks: {
                display: true,
              },
            },
            y: {
              ticks: {
                display: true,
              },
            },
          },
        },
      });

      new Chart('disasterCanvas', {
        type: 'bar',

        data: {
          labels: disaster,
          datasets: [
            {
              data: areaCode,
              label: 'area',
              backgroundColor: '#A121D5',
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: true,
            },
          },
          scales: {
            x: {
              ticks: {
                display: true,
              },
            },
            y: {
              ticks: {
                display: true,
              },
            },
          },
        },
      });
      /////////////////////////
      
      new Chart('equipment', {
        type: 'bar',

        data: {
          labels: ["Huawei", "Cisco", "Telecom Company", "Juniper Networks"],
          datasets: [
            {
              data: [5, 2, 1, 4],
              label: 'No. of Disasters',
              backgroundColor: '#FFA3CA',
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: true,
            },
          },
          scales: {
            x: {
              ticks: {
                display: true,
              },
            },
            y: {
              ticks: {
                display: true,
              },
            },
          },
        },
      });
///////////////////
    });
  }
}

//(click)="onLogout()"
