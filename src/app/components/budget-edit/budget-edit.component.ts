import { Component, OnInit } from '@angular/core';

import { Budget } from 'src/app/Budget';
import { BUDGET } from 'src/app/mock-budget';
import { BudgetService } from 'src/app/services/budget.service';
@Component({
  selector: 'app-budget-edit',
  templateUrl: './budget-edit.component.html',
  styleUrls: ['./budget-edit.component.scss'],
})
export class BudgetEditComponent implements OnInit {
  budgets: Budget[] = BUDGET;

  constructor() {}

  ngOnInit(): void {
    
  }
}
