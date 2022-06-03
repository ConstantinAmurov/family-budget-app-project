import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  overallIncome: number = 0;
  outcomeValue: number = 0;
  totalEntries: number = 0;

  constructor(private budgetService: BudgetService) {}
  ngOnInit(): void {
    this.budgetService.getBudgets().subscribe((budgets) => {
      this.totalEntries = budgets.length;

      budgets.forEach((budget) => {
        if (budget.amount > 0) {
          this.overallIncome += budget.amount;
        }
        this.outcomeValue += budget.amount;
      });
    });
  }
}
