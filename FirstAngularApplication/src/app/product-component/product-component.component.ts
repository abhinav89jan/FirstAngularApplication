import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/product-component/Product.Model';
import { ProductServices } from './ProductServices';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  //styleUrls: ['./product-component.component.css'] //when use css class
  styles: [`p{
    color: green;
}`]
})
export class ProductComponentComponent implements OnInit {
  productId: number = 0;
  productName: string = "";

  pruductList: ProductModel[] = [new ProductModel(1, "Avenger", "220 byke", 96000, "https://imgd.aeplcdn.com/640x348/bw/models/bajaj-avenger-cruise-220.jpg?20181901173402")];
  productStatus: string = "";
  productrecords: string = "";
  apiValues: string[] = [];

  ngOnInit() {
  }

  constructor(private productServices: ProductServices) { }

  GetProductDetail() {
    return this.productName + " Byke";
  }

  onSubmit() {
    //this.pruductList.push(this.productName);
    //this.productStatus = this.productName + " is created succesfully";
    //return console.log(this.productStatus);
  }

  onGetProductById() {
    this.productServices.GetProductById(this.productId).subscribe(
      (response: any) => console.log(response),
      (error) => console.log(error))
  }

  onGetProductList() {
    this.productServices.GetProductList().subscribe(
      (response: any) => console.log(response),
      (error) => console.log(error))
  }
}
