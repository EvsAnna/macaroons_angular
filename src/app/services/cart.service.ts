import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  count: number = 0;
  summCount:number = 0;

  constructor() {
  }

  calcSummaInCart(price: number) {
    this.summCount = this.summCount + price;
  }
}
