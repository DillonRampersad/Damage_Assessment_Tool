import { Component, OnInit } from '@angular/core';
import { ChartsService } from 'src/app/service/charts.service';
import { Chart } from 'chart.js';
import { map } from 'rxjs';
import { AggregationService } from 'src/app/service/aggregation.service';
@Component({
  selector: 'app-ad-charts',
  templateUrl: './ad-charts.component.html',
  styleUrls: ['./ad-charts.component.css']
})
export class AdChartsComponent implements OnInit {
  chart = [];

  cisco;
  huawei;
  Jn;
  tele;
  disasterN: any;
  equipmentType: any;

  constructor(private chartService: ChartsService, private aggregate: AggregationService) {}

  ngOnInit(): void {
    this.chartService.facCost().subscribe((res)=> {
      let facility = res.map((res) => res.facilityName);
      let cost = res.map((res) => res.cost);
      let noOfEqu = res.map((res) => res.noOfEqu);
      let noOfEmployees = res.map((res) => res.noOfEmployees);

      console.log(facility);
      console.log(cost);
      console.log(noOfEqu);
      console.log(noOfEmployees);

      new Chart('noOfEquEmp', {
        type: 'bar',

        data: {
          labels: facility,
          datasets: [
            {
              data: noOfEqu,
              label: 'No of Equipment',
              backgroundColor: '#35D900',
            },
            {
              data: noOfEmployees,
              label: 'No. of Employees',
              backgroundColor: '#00CFD9',
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
      })


      new Chart('costOfFac', {
        type: 'bar',

        data: {
          labels: facility,
          datasets: [
            {
              data: cost,
              label: 'Cost',
              backgroundColor: '#F9A262',
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
    })

    this.chartService.equCost().subscribe((res)=> {
      let equipment = res.map((res) => res.equipmentName);
      let cost = res.map((res) => res.cost);

      console.log(equipment);
      console.log(cost);

      new Chart('costOfEqu', {
        type: 'bar',

        data: {
          labels: equipment,
          datasets: [
            {
              data: cost,
              label: 'Cost',
              backgroundColor: '#820037',
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
    })

    this.chartService.noOfEquDis().subscribe((res)=>{
      let disasterN = res.map((res) => res.disasterNature);
      let equipmentType = res.map((res) => res.equipmentType);

      console.log(disasterN);
      console.log(equipmentType);

      new Chart('equipment', {
        type: 'line',

        data: {
          labels: disasterN,
          datasets: [
            {
              data: equipmentType,
              label: 'Equipment Type',
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
            y: {
              type: 'category',
              reverse: true,
              labels: equipmentType
            },
          },
        },
      });
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
      console.log(areaCode);
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
        type: 'line',

        data: {
          labels: disaster,
          datasets: [
            {
              data: area,
              label: 'Area',
              backgroundColor: '#08DDB6',
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
            y: {
              type: 'category',
              reverse: true,
              labels: area
            },
          },
        },
      });
      /////////////////////////
      
      
///////////////////
    });
  }
}

//(click)="onLogout()"
