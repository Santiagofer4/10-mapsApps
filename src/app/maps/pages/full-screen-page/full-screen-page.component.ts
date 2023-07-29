import { Component, AfterViewInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
(mapboxgl as any).accessToken = 'pk.eyJ1Ijoic2FudGlhZ29mZXJuMSIsImEiOiJjbDEybTR3NXkxbHNuM3FvMHF2ZDVkamVqIn0.i_6y6Cx7c8Np0YqJE9AURQ';


@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.scss']
})
export class FullScreenPageComponent implements AfterViewInit {


  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
      });
  }

  
} 