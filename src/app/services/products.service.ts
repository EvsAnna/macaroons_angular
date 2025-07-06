import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts():ProductType[] {
    return [
      {
        image: '1.png',
        quantity: 1,
        title: 'Макарун с малиной',
        price: 1.70,
      },
      {
        image: '2.png',
        quantity: 1,
        title: 'Макарун с манго',
        price: 1.70,
      },
      {
        image: '3.png',
        quantity: 1,
        title: 'Пирог с ванилью',
        price: 1.70,
      },
      {
        image: '4.png',
        quantity: 1,
        title: 'Пирог с фисташками',
        price: 1.70,
      },
    ]
  }
}
