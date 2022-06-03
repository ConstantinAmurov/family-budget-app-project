import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BUDGET } from '../mock-budget';
import { Budget } from '../Budget';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  budgets: Budget[] = [];

  constructor() {}

  getBudgets(): Observable<Budget[]> {
    const budgets = of(BUDGET);
    return budgets;
  }
}
