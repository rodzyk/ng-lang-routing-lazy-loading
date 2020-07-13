import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChildDefaultComponent } from "./child-default/child-default.component";
import { ChildSpecialComponent } from "./child-special/child-special.component";

const routes: Routes = [
  {
    path: "product",
    component: ChildDefaultComponent,
    loadChildren: () =>
      import("src/app/product/product.module").then((m) => m.ProductModule),
  },
  {
    path: "manufacturer",
    component: ChildDefaultComponent,
    loadChildren: () =>
      import("src/app/manufacturer/manufacturer.module").then(
        (m) => m.ManufacturerModule
      ),
  },
  {
    path: "special",
    component: ChildSpecialComponent,
  },
  {
    path: "",
    component: ChildDefaultComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
