import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prdoucts',
  templateUrl: './prdoucts.component.html',
  styleUrls: ['./prdoucts.component.css']
})
export class PrdouctsComponent implements OnInit {

  products;

  constructor() { }

  ngOnInit(): void {
    this.products=[
      {id:1,name:"salim",email:"salim@gmail.com"},
      {id:2,name:"amine",email:"amine@gmail.com"},
      {id:3,name:"said",email:"said@gmail.com"}
    ]
  }

}
