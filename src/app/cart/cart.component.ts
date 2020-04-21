import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;
  message = null;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    console.log(customerData);
    // should have validation and display error message
    if (!customerData.name) {
      this.message = 'Invalid name.';
      return;
    }
    if (!customerData.address) {
      this.message = 'Invalid address.';
      return;
    }
    // process checkout data here, call to some external web service
    let cnt = this.items.length;
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    //console.warn('Your order (' + cnt + ' items) has been submitted', customerData);
    this.message = "Your order (' + cnt + ' items) has been submitted.";
  }

}