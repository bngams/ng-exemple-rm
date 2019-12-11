import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

  buttonClick(): void {
    console.log('button click');
    this.isDisabled = !this.isDisabled;
  }

}
