import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  //'ActivatedRoute' service helps to read the parameter from url
  //'Router' service helps to route through the code
  constructor(private route: ActivatedRoute, private router: Router, private productService : ProductService) { }
  
  imageWidth: number = 100;
  imageMargin: number = 2;
  pageTitle : string = 'Product Details:'
  product : IProduct | undefined
  sub!: Subscription;//'!' tells compiler that value initialization for this property will be handle later

  ngOnInit(): void {
     //One time reading the parameter
    const Id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += Id;
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        products = products;
        this.product = products.find(p => p.productId == Id);
      },
      error: err  => this.pageTitle = 'Error:'+ err,
      complete: () => console.log('Observer got a complete notification'),
    });
  }
  onBack(): void{
    this.router.navigate(['/products']);
  }

}
