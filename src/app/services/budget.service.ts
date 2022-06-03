import { APP_ID, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BUDGET } from '../mock-budget';
import { Budget } from '../Budget';
import { endpoint, api } from '../api';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  budgets: Budget[] = [];

  constructor(private http: HttpClient) {}

  getBudgets(): Observable<Budget[]> {
    return this.http.get<Budget[]>(endpoint + api.budgets);
  }

  getBudget(id: number): Observable<Budget[]> {
    return this.getBudgets().pipe(
      map((budgets: any[]) => budgets.find((budget) => budget.id == id))
    );
  }

  onDelete(id: number): Observable<Budget> {
    const url = endpoint + api.budgets + id;
    debugger;
    return this.http.delete<Budget>(url);
  }

  onAdd(budget: Budget): Observable<Budget> {
    const url = endpoint + api.budgets;
    return this.http.post<Budget>(url, budget);
  }
}
