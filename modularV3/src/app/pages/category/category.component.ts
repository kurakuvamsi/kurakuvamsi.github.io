import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import catalog from '../../data/catalog.json';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  category: any = catalog.categories[0];
  sort = 'featured';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.category = catalog.categories.find(item => item.slug === data['category']) ?? catalog.categories[0];
    });
  }

  get products() {
    const items = [...this.category.products];
    if (this.sort === 'low') return items.sort((a, b) => this.number(a.price) - this.number(b.price));
    if (this.sort === 'high') return items.sort((a, b) => this.number(b.price) - this.number(a.price));
    return items;
  }

  private number(value: string) {
    return Number(value.replace(/[^0-9]/g, ''));
  }
}
