import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Budget } from 'src/app/Budget';
import { BudgetService } from 'src/app/services/budget.service';
@Component({
  selector: 'app-budget-edit',
  templateUrl: './budget-edit.component.html',
  styleUrls: ['./budget-edit.component.scss'],
})
export class BudgetEditComponent implements OnInit {
  budget: Budget;


  constructor(private budgetService: BudgetService, private router: Router) {}

  ngOnInit(): void {
    const id = +this.router.url.split('/')[2];

    this.budgetService
      .getBudget(id)
      .subscribe((budget) => (this.budget = budget));
  }

  onSubmit() {
    if (!this.budget.amount) {
      alert('Please Enter an Amount');
      return;
    }
    if (!this.budget.category) {
      alert('Please Enter a Category');
      return;
    }
    if (!this.budget.title) {
      alert('Please Enter a Title');
      return;
    }

    const updatedBudget = {
      id: this.budget.id,
      amount: this.budget.amount,
      category: this.budget.category,
      title: this.budget.title,
    };

    this.budgetService
      .onEdit(updatedBudget)
      .subscribe((budget) => (this.budget = budget));

    alert('Budget Entry has been updated succesfully');

    this.router.navigate(['/budget']);
  }
}
