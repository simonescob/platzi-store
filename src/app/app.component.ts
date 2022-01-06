import { Component } from '@angular/core';

import { Product } from "./product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';
  names = [
    "simon",
    "pedro",
    "maria",
    "angel",
    "virginia"
  ];

  products: Product[] = [
    {
      id: 1,
      image: 'assets/images/camiseta.png',
      title: "Camiseta",
      price: 54000,
      description: "bla bla bla bla bla bla"
    },
    {
      id: 2,
      image: 'assets/images/camiseta.png',
      title: "Camiseta",
      price: 54000,
      description: "bla bla bla bla bla bla"
    },
    {
      id: 3,
      image: 'assets/images/hoodie.png',
      title: "hoodie",
      price: 120000,
      description: "bla bla bla bla bla bla"
    },
    {
      id: 4,
      image: 'assets/images/camiseta.png',
      title: "Camiseta",
      price: 54000,
      description: "bla bla bla bla bla bla"
    },
  ];

  addItems() {
    this.names.push('nuevo item');
  }

  removeItem(index: number) {
    this.names.splice(index, 1)
  }
}
