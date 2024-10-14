import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { VisualizationChartInfo } from '../models/reveal-server/visualization-chart-info';
import { ErrorHandlerService } from './error-handler.service';

const API_ENDPOINT = 'https://reveal-api.azurewebsites.net';

@Injectable({
  providedIn: 'root'
})
export class RevealServerService {
  constructor(
    private http: HttpClient
  ) { }

  public getVisualizationChartInfoList(): Observable<VisualizationChartInfo[]> {
    return this.http.get<VisualizationChartInfo[]>(`${API_ENDPOINT}/dashboards/visualizations/all`)
      .pipe(catchError(ErrorHandlerService.handleError<VisualizationChartInfo[]>('getVisualizationChartInfoList', [])));
  }
}
