import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ChildDefaultComponent } from './child-default/child-default.component';
import { ChildSpecialComponent } from './child-special/child-special.component';


@NgModule({
  declarations: [ChildDefaultComponent, ChildSpecialComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
