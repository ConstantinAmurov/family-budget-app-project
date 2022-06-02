import { Component, OnInit } from '@angular/core';

import { BUDGET } from '../mock-budget';
import { Budget } from '../Budget';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.scss']
})
export class BudgetsComponent implements OnInit {
  budgets: Budget[] = BUDGET;

  constructor() { }

  ngOnInit(): void {
  }

}
