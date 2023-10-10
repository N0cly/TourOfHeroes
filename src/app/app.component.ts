import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[DashboardComponent,RouterModule],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <h1>Tour of Heroes</h1>
        </header>
      </a>
        <section class="section-nav">
          <nav class="navbar">
            <a [routerLink]="['/']">Dashboard</a>
            <a [routerLink]="['/heroes/']">Heroes</a>
          </nav>
        </section>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TourOfHeroes';
}
