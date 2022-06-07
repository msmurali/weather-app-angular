import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private api: ApiService) {}

  location: string = 'london';
  weather: WeatherData | undefined;

  ngOnInit() {
    this.getData(this.location);
  }

  submitHandler() {
    if (this.location) {
      this.getData(this.location);
    } else {
      alert('Type a location!');
    }
  }

  getData(location: string) {
    this.api.getWeatherData(location).subscribe({
      next: (data) => {
        this.weather = data;
      },
    });
  }
}
