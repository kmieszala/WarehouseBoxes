import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //@ViewChild('myCanvas', {static: false}) myCanvas: ElementRef;
  //@ViewChild('#myCanvas') myCanvas!: ElementRef;
  public forecasts: WeatherForecast[] = [];  
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    //this.getForecasts();
  }

  getForecasts() {
    this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(
      (result) => {
        this.forecasts = result;
        this.setCanvas();
      },
      (error) => {
        console.error(error);
      }
    );
  }
  setCanvas() {
    // this.myCanvas.nativeElement.style.backgroundColor = 'yellow';
    // this.myCanvas.nativeElement.style.width = '100px';
    // this.myCanvas.nativeElement.style.height = '100px';
  }

  title = 'warehouseboxes.client';
}
