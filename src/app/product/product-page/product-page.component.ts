import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.scss"],
})
export class ProductPageComponent implements OnInit {
  constructor(private title: Title, public prodService: ProductService) {}

  ngOnInit(): void {
    this.title.setTitle("Product | AR");

    this.getProduct();
  }
 
  getProduct() {
    this.prodService.get().subscribe(this.getProductHandler);
  }

  getProductHandler = data => {
    this.prodService.result = data;
  }
}
