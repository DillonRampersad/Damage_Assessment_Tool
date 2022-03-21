import { Component, OnInit } from '@angular/core';
declare const L: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (!navigator.geolocation){
      console.log("location is not supported");
    }
    navigator.geolocation.getCurrentPosition((position)=>
    {
      const coords = position.coords;
      console.log(`lat: ${position.coords.latitude}, lon:${position.coords.longitude}`)
      //this.lat = position.coords.latitude;
      //this.lon = position.coords.longitude;
      let map = L.map('map').setView([coords.latitude, coords.longitude], 8);

      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGlsbG9uciIsImEiOiJjbDB6MGdlbW8xNnZuM2lqbmJnNWZkNzY0In0.cfAOIAy5foQsoUlHhpYSjQ'
}).addTo(map);
    })
  }


}
