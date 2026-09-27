import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import catalog from '../../data/catalog.json';

@Component({selector:'app-home',standalone:true,imports:[RouterLink],templateUrl:'./home.component.html',styleUrl:'./home.component.css'})
export class HomeComponent implements OnInit, OnDestroy {
  catalog = catalog.categories;
  currentSlide = 0;
  private timer?: ReturnType<typeof setInterval>;
  slides = [
    {eyebrow:'MODULAR FURNITURE FOR MODERN LIVING',title:'Design Your Dream Space',copy:'Furniture that balances refined design, practical storage and everyday comfort.',button:'Explore Living Room',link:'/living-room',image:'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=90',offer:'UP TO 40% OFF'},
    {eyebrow:'A CALMER WAY TO LIVE',title:'Spaces Made Around You',copy:'Discover thoughtful bedroom and storage solutions with premium finishes.',button:'Explore Bedroom',link:'/bedroom',image:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2000&q=90',offer:'NEW COLLECTION'},
    {eyebrow:'WORK. HOST. UNWIND.',title:'Furniture With Purpose',copy:'Bring character to dining rooms and workspaces with modular flexibility.',button:'Explore Workspace',link:'/workspace',image:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=90',offer:'DESIGNED FOR 2026'}
  ];
  ngOnInit(){this.timer=setInterval(()=>this.next(),6000)}
  ngOnDestroy(){if(this.timer) clearInterval(this.timer)}
  next(){this.currentSlide=(this.currentSlide+1)%this.slides.length}
  prev(){this.currentSlide=(this.currentSlide-1+this.slides.length)%this.slides.length}
  goTo(i:number){this.currentSlide=i}
}
