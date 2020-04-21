import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ShippingFeeService } from './shipping-fee.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items = [];
  private itemCountSource = new BehaviorSubject<number>(0);
  public itemCount$ = this.itemCountSource.asObservable();

  constructor(private shippingFeeService: ShippingFeeService) { }

  addToCart(product) {
    this.items.push(product);
    this.itemCountSource.next(this.items.length);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.itemCountSource.next(0);
    return this.items;
  }

}
