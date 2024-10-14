import { Component, OnDestroy, OnInit } from '@angular/core';
//import { RevealSdkSettings } from '@revealbi/ui';
import { Subject, takeUntil } from 'rxjs';
import { VisualizationChartInfo } from '../models/reveal-server/visualization-chart-info';
import { RevealServerService } from '../services/reveal-server.service';

declare var $: any;

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})

export class MasterViewComponent implements OnInit, OnDestroy {
  _singleViz?: string;
  _singleVizDocument?: string;
  private destroy$: Subject<void> = new Subject<void>();
  public vizInfo?: VisualizationChartInfo;
  public revealServer: string = 'https://reveal-api.azurewebsites.net/';
  public revealServerVisualizationChartInfo: VisualizationChartInfo[] = [];

  constructor(
    private revealServerService: RevealServerService,
  ) {
    $.ig.RevealSdkSettings.setBaseUrl(this.revealServer);
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
    console.log('listItemClick', item);
    this.vizInfo = item;
    this._singleVizDocument = item.dashboardFileName;
    this._singleViz = item.vizId;
  }
}