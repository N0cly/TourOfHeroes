import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroStruc} from "../hero-struc";
import {HeroComponent} from "../hero/hero.component";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-My-heroes',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent
  ],
  template: `
    <section class="heroes">
      <app-heroes
        *ngFor="let hero of heroesList"
        [HeroStruc]="hero">
      </app-heroes>
    </section>
  `,
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  heroesList: HeroStruc[] = [];
  heroService: HeroService = inject(HeroService);
  SortheroesList: HeroStruc[] = []




  constructor() {
    this.heroService.getAllHeroes().then((heroesList: HeroStruc[]) =>
      this.heroesList = heroesList.sort((a, b) => a.score - b.score)

    )

  }
}
