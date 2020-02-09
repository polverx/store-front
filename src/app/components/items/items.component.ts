import { Component, OnInit } from '@angular/core';
import {itemsService} from "../../services/items.services";
import {Items} from "../models/items";
import {Quantity} from "../models/quantity";



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  providers: [itemsService]
})
export class ItemsComponent implements OnInit {

  public quanti:Quantity;

  public item: Items;
  items: any[];
  show: boolean;

  constructor(
    private _itemsService: itemsService,
  ) {
    this.item = new Items(0, '', '', 0);
  }



  onSubmit(form) {
    this._itemsService.setItem(this.item).subscribe(
      response => {
        console.log(response);
        form.reset();
        location.reload();
      },
      error => {
        console.log(<any>error);
      }
    )

  }

  toAdd(idNumber, amount) {

    console.log(idNumber);
    console.log(amount);

    this._itemsService.addItemsToStock(amount,idNumber).subscribe(
      response => {
        console.log(response);
        location.reload();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  toRemove(idNumber, amount) {

    console.log(idNumber);
    console.log(amount);

    this._itemsService.removeItemsFromStock(amount,idNumber).subscribe(
      response => {
        console.log(response);
        location.reload();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  deleteItem(idNumber) {

    console.log(idNumber);


    this._itemsService.deleteItem(idNumber).subscribe(
      response => {
        console.log(response);
        location.reload();
      },
      error => {
        console.log(<any>error);
      }
    );
  }


  ngOnInit() {
    this._itemsService.getItem().subscribe(
      result => {
        console.log(result);
        this.items = result;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}
