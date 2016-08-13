import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/core';


@Component({
  selector: 'statistics',
  templateUrl: 'app/components/statistics/statistics.component.html',
  styleUrls: ['app/components/statistics/statistics.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class StatisticsComponent implements OnInit {

  /**
   * Constructor.
   */
  public constructor() {
    // nothing
  }

  /**
   * Initialize statistics.
   */
  public ngOnInit() {
  }

}
