import {Component, Input, OnInit} from '@angular/core';
import {INewTransaction} from "../../../../../../shared/interfaces/interfaces";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input()public transaction!:INewTransaction;
  constructor() { }

  ngOnInit(): void {
  }

}
