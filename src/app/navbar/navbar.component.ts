import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  title: string = 'KB\'s Photo Gallery'
  locations: string[] = [
    'Newmarket',
    'Philadelphia',
    'Random'
  ]

  ngOnInit(): void {
  }

}
