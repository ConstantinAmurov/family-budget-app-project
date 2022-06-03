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

  getBudget(id: number): Observable<Budget> {
    return this.http.get<Budget>(endpoint + api.budgets + id);
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

  onEdit(budget: Budget): Observable<Budget> {
    debugger;
    const url = endpoint + api.budgets+ budget.id;
    return this.http.put<Budget>(url, budget);
  }
}
