import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getWeatherData(city: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseURL, {
      headers: new HttpHeaders()
        .set(
          environment.XRapidAPIHostHeaderName,
          environment.XRapidAPIHostHeaderValue
        )
        .set(
          environment.XRapidAPIHostKeyName,
          environment.XRapidAPIHostKeyValue
        ),
      params: new HttpParams()
        .set('q', city)
        .set('units', 'metric')
        .set('mode', 'json'),
    });
  }
}
