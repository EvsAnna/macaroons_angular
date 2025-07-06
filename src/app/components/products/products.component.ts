import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductType} from "../../types/product.type";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() product: ProductType = {} as ProductType;
  @Output() addToCart = new EventEmitter<ProductType>();

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
  }

  clickOnButton() {
    this.cartService.count++;
    this.cartService.calcSummaInCart(this.product.price);
    this.addToCart.emit(this.product);
  }

}
