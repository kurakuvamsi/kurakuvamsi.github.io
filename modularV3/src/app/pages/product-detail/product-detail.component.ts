// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, RouterLink } from '@angular/router';
// import catalog from '../../data/catalog.json';
// @Component({selector:'app-product-detail',standalone:true,imports:[RouterLink],templateUrl:'./product-detail.component.html',styleUrl:'./product-detail.component.css'})
// export class ProductDetailComponent implements OnInit {
//   product:any; category:any; zoom=false; zoomX=50; zoomY=50;
//   constructor(private route:ActivatedRoute){}
//   ngOnInit(){const id=this.route.snapshot.paramMap.get('id'); for(const category of catalog.categories){const match=category.products.find(item=>item.id===id); if(match){this.product=match;this.category=category;break;}}}
//   move(event:MouseEvent,box:HTMLElement){const rect=box.getBoundingClientRect();this.zoomX=((event.clientX-rect.left)/rect.width)*100;this.zoomY=((event.clientY-rect.top)/rect.height)*100;}
// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import catalog from '../../data/catalog.json';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  product: any;
  category: any;
  zoom = false;
  zoomX = 500;
  zoomY = 500;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

    this.route.paramMap.subscribe(params => {

      const id = params.get('id');

      // Find the selected product from JSON
      this.product = null;
      this.category = null;

      for (const category of catalog.categories) {

        const match = category.products.find(
          item => item.id === id
        );

        if (match) {
          this.product = match;
          this.category = category;
          break;
        }
      }

      // Scroll to top whenever a different product is opened
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

    });

  }

  move(event: MouseEvent, box: HTMLElement) {

    const rect = box.getBoundingClientRect();

    this.zoomX =
      ((event.clientX - rect.left) / rect.width) * 100;

    this.zoomY =
      ((event.clientY - rect.top) / rect.height) * 100;
  }

}