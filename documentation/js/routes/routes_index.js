var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"home","component":"HomeComponent"},{"path":"get-started","component":"GetStartedComponent"},{"path":"products","loadChildren":"./modules/product/product.module#ProductModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/product/product-routing.module.ts","module":"ProductRoutingModule","children":[{"path":"","component":"ProductDashboardComponent"},{"path":"detail/:id","component":"ProductDetailComponent"}],"kind":"module"}],"module":"ProductModule"}]},{"path":"","redirectTo":"/home","pathMatch":"full"},{"path":"**","component":"PageNotFoundComponent"}],"kind":"module"}]}
