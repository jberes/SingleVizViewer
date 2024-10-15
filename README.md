# Reveal SingleVisualizationMode in App Builder

Reveal has a feature that lets you pull a single visualization from an `.RDASH` file and display that specific visualization in a `RevealView`. 

## Overview

[Video Explanation](https://app.screencast.com/vAIRlzhFvL2rR)

<img width="750" alt="2024-10-14_20-18-26" src="https://github.com/user-attachments/assets/03e40cdc-f9ee-4742-981a-4798ec9bb18a">


## Details



Single Visualizations can be loaded in one of two ways:

- By **Visualization ID**, which is a string / GUID
- By **Visualization Title**, which is simply the title of the visualization

The recommended approach is to use the **GUID**, as a dashboard can have multiple visualizations with the same title.

To use the **SingleVisualizationMode**, there is the new `rv-visualization-viewer` in the Reveal Web Components wrapper. Here are the docs to review how to get started with the new Reveal Web Components wrapper:  
[Reveal Web Components Documentation](https://help.revealbi.io/web/web-component-wrappers/visualization-viewer/options/)

The basic approach is to pass the **Dashboard File Name** and the **Visualization ID** to the `rv-visualization-viewer`.

```html
<rv-visualization-viewer *ngIf="_singleVizDocument"
    [dashboard]="_singleVizDocument"
    [visualization]="_singleViz">
</rv-visualization-viewer>
```

In code, assign the variable values to the properties of the `rv-visualization-viewer`.

```typescript
private loadDashboardById(dashboardName: string, visualizationId: string) {
    this._singleVizDocument = dashboardName; // string
    this._singleViz = visualizationId; // string
}
```

The following API returns the visualization info for dashboards on the server. The **VizId** and the **DashboardFileName** are used to load the single visualization into the `rv-visualization-viewer`.

- [API to get visualization info](https://reveal-api.azurewebsites.net/dashboards/visualizations/all)

Sample application using the `rv-visualization-viewer`:  
- [GitHub Repository - Single Visualization Viewer](https://github.com/jberes/SingleVizViewer)
