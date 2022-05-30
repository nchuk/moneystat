import {Component, Input, OnInit} from '@angular/core';
import {INewTransaction} from "../../../../../../shared/interfaces/interfaces";

@Component({
  selector: 'app-list-transaction-item',
  templateUrl: './list-transaction-item.component.html',
  styleUrls: ['./list-transaction-item.component.scss']
})
export class ListTransactionItemComponent implements OnInit {

  @Input()public transaction!:INewTransaction;

  constructor() { }

  ngOnInit(): void {
  }

}
