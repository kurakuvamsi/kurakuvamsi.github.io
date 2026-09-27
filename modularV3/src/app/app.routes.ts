import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { OffersComponent } from './pages/offers/offers.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { OurClientsComponent } from './pages/our-clients/our-clients.component';
import { OurVisionComponent } from './pages/our-vision/our-vision.component';
import { OurMissionComponent } from './pages/our-mission/our-mission.component';

export const routes: Routes = [{path:'',component:LayoutComponent,children:[
  {path:'',component:HomeComponent,title:'Pride Modular | Home'},
  {path:'living-room',component:CategoryComponent,data:{category:'living-room'},title:'Living Room | Pride Modular'},
  {path:'bedroom',component:CategoryComponent,data:{category:'bedroom'},title:'Bedroom | Pride Modular'},
  {path:'dining',component:CategoryComponent,data:{category:'dining'},title:'Dining | Pride Modular'},
  {path:'workspace',component:CategoryComponent,data:{category:'workspace'},title:'Workspace | Pride Modular'},
  {path:'storage',component:CategoryComponent,data:{category:'storage'},title:'Storage | Pride Modular'},
  {path:'decor',component:CategoryComponent,data:{category:'decor'},title:'Decor | Pride Modular'},
  {path:'product/:id',component:ProductDetailComponent,title:'Product Details | Pride Modular'},
  {path:'gallery',component:GalleryComponent,title:'Gallery | Pride Modular'},
  {path:'offers',component:OffersComponent,title:'Offers | Pride Modular'},
  {path:'about',component:AboutComponent,title:'About | Pride Modular'},
  {path:'our-clients',component:OurClientsComponent,title:'Our Clients | Pride Modular'},
  {path:'our-vision',component:OurVisionComponent,title:'Our Vision | Pride Modular'},
  {path:'our-mission',component:OurMissionComponent,title:'Our Mission | Pride Modular'},
  {path:'contact',component:ContactComponent,title:'Contact | Pride Modular'}
]},{path:'**',redirectTo:''}];
