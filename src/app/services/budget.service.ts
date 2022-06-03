import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BUDGET } from '../mock-budget';
import { Budget } from '../Budget';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  budgets: Budget[] = [];
  private apiUrl = 'http://localhost:5000/tasks';

  constructor() {}

  getBudgets(): Observable<Budget[]> {
    const budgets = of(BUDGET);
    return budgets;
  }

  getBudget(id: number): Observable<Budget[]> {
    return this.getBudgets().pipe(
      map((budgets: any[]) => budgets.find((budget) => budget.id == id))
    );
  }
}
