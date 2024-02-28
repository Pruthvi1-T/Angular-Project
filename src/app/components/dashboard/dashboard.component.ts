import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);
  
  chart = new Chart(
    {
      chart:{
        type: 'line',
        height: 300
      },
      title: {
        text:'Month by Sales'
      },
      xAxis:{
        categories:[  
          'Jan',
          'Feb',
          'Mar',
          'May',
          'June',
          'July',
          'Aug',
          'Sept',
          'Oct',
          'Nov',
          'Dec'
        ]
      },
      yAxis:{
        title:{
          text:'Revenue in $',
        }
      },
      series:[
        {
          name:'India',
          type:'line',
          data:[70, 40, 20, 90, 65, 29, 55, 44, 66, 78, 45, 34]
        },
        {
          name:'USA',
          type:'line',
          data:[50, 90, 20, 60, 68, 77, 47, 88, 66, 96, 32, 84]
        },
        {
          name:'Germany',
          type:'line',
          data:[50, 80, 90, 74, 28, 69, 95, 74, 66, 79, 85, 44]
        },
        {
          name:'UAE',
          type:'line',
          data:[50, 70, 33, 90, 65, 69, 85, 84, 46, 98, 35, 94]
        },
        {
          name:'Singapore',
          type: 'line',
          data:[40, 39, 55, 70, 88, 67, 45, 88, 89, 69, 75, 72]
        }
      ]
    }
  )
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );
}
