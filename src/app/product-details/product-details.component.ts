import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  cart: any[] = [];
  subTotalAmount: number = 0;
  discountAmount: number = 0;
  totalAmount: number = 0;

  products = [
    {
      id: 1,
      name: 'Cheese Burger',
      price: 389.00,
      quantity: 1,
      img: 'assets/Maiora/istockphoto-520410807-612x612.jpg'
    },
    {
      id: 2,
      name: 'Veg Pizza',
      price: 499.00,
      quantity: 1,
      img: 'assets/Maiora/istockphoto-520410807-612x612.jpg'
    },
    {
      id: 3,
      name: 'French Fries',
      price: 199.00,
      quantity: 1,
      img: 'assets/Maiora/istockphoto-520410807-612x612.jpg'
    },
  ];


  async calculateTotals() {
    debugger
    this.subTotalAmount = this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    this.discountAmount = this.subTotalAmount > 1000 ? this.subTotalAmount * 0.1 : 0;
    this.totalAmount = this.subTotalAmount - this.discountAmount;
  }


  addToCart(product: any) {
    debugger
    const existingItem = this.cart.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({ ...product });
    }
    this.calculateTotals();
  }

  decreaseQuantity(product: any) {
    debugger;
    const cartItem = this.cart.find(item => item.id === product.id);
    if (cartItem && cartItem.quantity >= 1) {
      cartItem.quantity--;
      this.calculateTotals();
    }
  }
  
  decressitems(item: any) {
    debugger
    item.quantity--;
    if (item.quantity === 0) {
      this.cart = this.cart.filter(cartItem => cartItem !== item);
    }
    this.calculateTotals();
  }

}
