import {Component} from '@angular/core';import {RouterLink} from '@angular/router';import catalog from '../../data/catalog.json';
@Component({selector:'app-gallery',standalone:true,imports:[RouterLink],templateUrl:'./gallery.component.html',styleUrl:'./gallery.component.css'})
export class GalleryComponent {categories=catalog.categories;}
