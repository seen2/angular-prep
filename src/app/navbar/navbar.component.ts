import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  // template: ` <h1>INline HTML</h1> `,
  // styles: `
  // h1{
  // color:red;
  // background:black;
  // }
  // `,
  styleUrl: './navbar.component.css',
})
export class AppNavbarComponent {
  title: string = 'Navbar';
}
