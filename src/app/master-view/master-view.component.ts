import { Component, OnDestroy, OnInit } from '@angular/core';
import { RevealSdkSettings, RevealViewOptions } from '@revealbi/ui';
import { Subject, takeUntil } from 'rxjs';
import { VisualizationChartInfo } from '../models/reveal-server/visualization-chart-info';
import { RevealServerService } from '../services/reveal-server.service';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit, OnDestroy {
  dashboardOptions: RevealViewOptions = {
    visualizations: {
      menu: {
        copy: false,
        duplicate: false
      }
    }
  };
  private destroy$: Subject<void> = new Subject<void>();
  public vizInfo?: VisualizationChartInfo;
  public revealServer: string = 'https://reveal-api.azurewebsites.net/';
  public revealServerVisualizationChartInfo: VisualizationChartInfo[] = [];

  constructor(
    private revealServerService: RevealServerService,
  ) {
    RevealSdkSettings.serverUrl = 'revealServer';
  }

  ngOnInit() {
    this.revealServerService.getVisualizationChartInfoList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.revealServerVisualizationChartInfo = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public listItemClick(item: VisualizationChartInfo) {
    this.vizInfo = item;
  }
}
