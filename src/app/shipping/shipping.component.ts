import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ShippingFeeService } from '../shipping-fee.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts = [];

  constructor(
    private cartService: CartService,
    private shippingFeeService: ShippingFeeService) { }

  ngOnInit() {
    this.shippingCosts = this.shippingFeeService.getShippingPrices();
  }

}