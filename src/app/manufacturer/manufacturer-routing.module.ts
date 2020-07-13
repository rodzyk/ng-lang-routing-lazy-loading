import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ManufacturerPageComponent } from "./manufacturer-page/manufacturer-page.component";

const routes: Routes = [
  {
    path: "",
    component: ManufacturerPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManufacturerRoutingModule {}
