import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-exemple';
  isDisabled = false;
  date = new Date();
  price = 90;
  products: any[] = [
    {
      name: 'Product1',
      price: 90
    },
    {
      name: 'Product2',
      price: 90
    }
  ];

  // constructor(
  //   private myService: MyService
  // ) {
  //   this.myService = new myService();
  // }

  // constructor(
  //   private myService: MyService
  // ) {
  // }

  buttonClick(): void {
    console.log('button click');
    this.isDisabled = !this.isDisabled;
  }
}
