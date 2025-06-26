import {Component} from '@angular/core';
import {AdvantagesType} from "./types/advantages.type";
import {ProductType} from "./types/product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 public title = 'macaroons';
 public advantages: AdvantagesType[] = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
  ]

 public products: ProductType[] = [
    {
      image: '1.png',
      quantity: 1,
      title: 'Макарун с малиной',
      price: '1,70',
    },
    {
      image: '2.png',
      quantity: 1,
      title: 'Макарун с манго',
      price: '1,70',
    },
    {
      image: '3.png',
      quantity: 1,
      title: 'Пирог с ванилью',
      price: '1,70',
    },
    {
      image: '4.png',
      quantity: 1,
      title: 'Пирог с фисташками',
      price: '1,70',
    },
  ];

 public formValues = {
    productTitle: '',
    userName: '',
    phone: ''
  };

 public showPresent: boolean = true;
 public mainPhone: string = '+375 (29) 368-98-68';
 public linkInstagram: string = 'https://www.instagram.com/';

 public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }

 public addToCard(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase();
  }

 public orderProduct() {
    if (!this.formValues.productTitle) {
      alert('Заполните пиццу!');
      return;
    }
    if (!this.formValues.userName) {
      alert('Заполните адрес!');
      return;
    }
    if (!this.formValues.phone) {
      alert('Заполните телефон!');
      return;
    }

    alert('Спасибо за заказ');
    //ajax
    this.formValues = {
      productTitle: '',
      userName: '',
      phone: ''
    }
  }

  public openMenu(menuElement: HTMLElement): void {
    menuElement.classList.add('open');
  }

  public closeMenu(menuElement: HTMLElement): void {
    menuElement.classList.remove('open');
  }
}
