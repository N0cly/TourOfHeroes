import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {HeroStruc} from "../hero-struc";
import {HeroService} from "../hero.service";

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
        <a *ngFor="let hero of heroesList" [routerLink]="['/details', hero.id]" class="topHero">
            <span class="topHeroName">{{hero.name}}</span>
        </a>
      </section>
    </section>
  `,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

    heroesList: HeroStruc[] = [];
    heroService: HeroService = inject(HeroService);

    constructor() {
        this.heroService.get4HeroSortedByScore().then(heroes => {
        this.heroesList = heroes;
        });
    }

}
