import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-manufacturer-page',
  templateUrl: './manufacturer-page.component.html',
  styleUrls: ['./manufacturer-page.component.scss']
})
export class ManufacturerPageComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    return this.title.setTitle("Manufacturer | AR")
  }

}
