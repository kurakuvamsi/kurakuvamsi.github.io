# ModuHome Angular V3

A polished Angular 21 furniture showcase built around a green + gold luxury visual system.

## V3 highlights
- Hero slider with 3 animated slides
- Home page store introduction and trust highlights
- Shop-by-category section for Living Room, Bedroom, Dining, Workspace, Storage and Decor
- Best-seller section with View Details buttons and View More navigation
- All six product categories driven from one `src/app/data/catalog.json`
- Product cards generated with Angular `@for` loops
- No Add to Cart buttons — replaced with **View Details**
- Product detail route: `/product/:id`
- Clicking a product image or View Details opens that exact product
- Product detail page includes image magnifier/zoom interaction
- Gallery is generated from the same JSON catalog
- Header includes **More** submenu: Our Clients, Our Vision, Our Mission
- Dedicated routed pages for Our Clients, Our Vision and Our Mission
- Responsive mobile navigation
- Green + gold corporate/luxury styling
- Entrance, hover and slider animations
- Separate Header, Footer and Layout components

## Run locally
```bash
npm install
npm start
```
Then open `http://localhost:4200/`.

## Main routes
- `/`
- `/living-room`
- `/bedroom`
- `/dining`
- `/workspace`
- `/storage`
- `/decor`
- `/gallery`
- `/offers`
- `/about`
- `/our-clients`
- `/our-vision`
- `/our-mission`
- `/contact`
- `/product/:id`

## Data-driven catalog
Edit `src/app/data/catalog.json` to add, remove or change categories and products. Category pages, the home category cards, best sellers, gallery and product detail pages use the same JSON data.

Images currently use remote Unsplash URLs. Replace them with your own files under `public/assets` when ready.
