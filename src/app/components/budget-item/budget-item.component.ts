import { Component, Input, OnInit } from '@angular/core';
import { Budget } from '../Budget';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-budget-item',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.scss'],
})
export class BudgetItemComponent implements OnInit {
  @Input() budget: Budget;
  editIcon = faPenToSquare;
  deleteIcon = faTrash;


  constructor() {}

  ngOnInit(): void {}
}
