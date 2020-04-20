import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = null;
      let productId = +params.get('productId');
      //console.log('productId=' + productId);
      for (let ix = 0; ix < products.length; ix += 1) {
        //console.log('db.product.Id=' + products[ix].id);
        if (products[ix].id === productId) {
          this.product = products[ix];
          break;
        }
      }
    });
  }

}