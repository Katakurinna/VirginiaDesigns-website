import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  protected isHome: boolean = false;
  constructor() { 
    this.isHome = true;
  }

  ngOnInit(): void {
  }

}
