import { Component, OnInit } from '@angular/core';

import { BudgetService } from 'src/app/services/budget.service';
import { Budget } from '../../Budget';

import { Router } from '@angular/router';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.scss'],
})
export class BudgetsComponent implements OnInit {
  budgets: Budget[] = [];

  constructor(private budgetService: BudgetService, private router: Router) {}

  ngOnInit(): void {
    this.budgetService
      .getBudgets()
      .subscribe((budgets) => (this.budgets = budgets));
  }

  deleteItem(id: number) {
    console.log(id);
    this.budgets = this.budgets.filter((budget) => budget.id !== id);
  }

}
