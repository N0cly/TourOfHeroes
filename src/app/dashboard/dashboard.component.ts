import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="mainDash">
      <section class="section-titleDash">
        <h2 class="titleDash">Top Heroes</h2>
      </section>
      <section class="topHeroes">
        <ul>
          <a [routerLink]="['/']"><li>Heroes</li></a>
          <a [routerLink]="['/']"><li>Heroes</li></a>
          <a [routerLink]="['/']"><li>Heroes</li></a>
          <a [routerLink]="['/']"><li>Heroes</li></a>
        </ul>
      </section>
    </section>
  `,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

}
