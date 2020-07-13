import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-child-special',
  templateUrl: './child-special.component.html',
  styleUrls: ['./child-special.component.scss']
})
export class ChildSpecialComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle("ChildSpecial | AR")
  }

}
