import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit, OnDestroy {

  private itemCountRef: Subscription = null;
  itemCount = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.itemCountRef = this.cartService.itemCount$.subscribe((data) => {
      this.itemCount = data;
    });
  }

  ngOnDestroy() {
    this.itemCountRef.unsubscribe();
  }

  onCheckout() {
    window.alert('Checkout!');
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
