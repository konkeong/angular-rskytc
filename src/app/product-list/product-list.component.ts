import { Component } from '@angular/core';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = products;

  constructor(private cartService: CartService) { }

  share(product) {
    window.alert('The product [' + product.name + '] has been shared!');
  }

  onNotify(product) {
    window.alert('You will be notified when the product [' + product.name + '] goes on sale.');
  }

  buy(product) {
    this.cartService.addToCart(product);
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/