import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({selector:'app-header',standalone:true,imports:[RouterLink,RouterLinkActive],templateUrl:'./header.component.html',styleUrl:'./header.component.css'})
export class HeaderComponent { menuOpen=false; moreOpen=false; toggleMenu(){this.menuOpen=!this.menuOpen;this.moreOpen=false;} closeMenu(){this.menuOpen=false;this.moreOpen=false;} toggleMore(){this.moreOpen=!this.moreOpen;} }
