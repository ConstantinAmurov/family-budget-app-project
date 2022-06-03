import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { BudgetService } from 'src/app/services/budget.service';
import { Budget } from 'src/app/Budget';

@Component({
  selector: 'app-budget-add-form',
  templateUrl: './budget-add-form.component.html',
  styleUrls: ['./budget-add-form.component.scss'],
})
export class BudgetAddFormComponent implements OnInit {
  @Output() onAddBudget: EventEmitter<Budget> = new EventEmitter();
  amount: number;
  category: string;
  title: string;

  constructor(private budgetService: BudgetService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.amount) {
      alert('Please Enter an Amount');
      return;
    }
    if (!this.category) {
      alert('Please Enter a Category');
      return;
    }
    if (!this.title) {
      alert('Please Enter a Title');
      return;
    }

    const newTask = {
      id: 1,
      amount: this.amount,
      category: this.category,
      title: this.title,
    };

    this.onAddBudget.emit(newTask);

    this.amount = 0;
    this.category = '';
    this.title = '';
  }
}
