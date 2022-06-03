import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BUDGET } from '../mock-budget';
import { Budget } from '../Budget';
import { url, api } from '../api';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  budgets: Budget[] = [];

  constructor(private http: HttpClient) {}

  getBudgets(): Observable<Budget[]> {
    return this.http.get<Budget[]>(url + api.budgets);
  }

  getBudget(id: number): Observable<Budget[]> {
    return this.getBudgets().pipe(
      map((budgets: any[]) => budgets.find((budget) => budget.id == id))
    );
  }
}
