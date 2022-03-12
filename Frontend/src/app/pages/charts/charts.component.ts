import { Component, OnInit } from '@angular/core';
import { ChartsService } from 'src/app/service/charts.service';
import { Chart } from 'chart.js';
import { map } from 'rxjs';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {
  chart = [];
  constructor(private chartService: ChartsService) {}

  ngOnInit(): void {
    this.chartService.noOfEqu().subscribe((res) => {
      let area = res.map((res) => res.area);
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
    });
  }
}

//(click)="onLogout()"
