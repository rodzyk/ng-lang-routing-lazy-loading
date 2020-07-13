import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "en",
    loadChildren: () =>
      import("src/app/pages/pages.module").then((m) => m.PagesModule),
  },
  {
    path: "",
    loadChildren: () =>
      import("src/app/pages/pages.module").then((m) => m.PagesModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
