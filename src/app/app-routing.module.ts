import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BudgetComponent } from './components/budget/budget.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'budget', component: BudgetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
