import {Component, inject} from '@angular/core';
import { CommonModule, Location  } from '@angular/common';
import {HeroStruc} from "../hero-struc";
import {HeroService} from "../hero.service";
import { ActivatedRoute } from '@angular/router';
import {toUpperCase} from "uri-js/dist/esnext/util";


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="mainDetails">
      <section class="section-titleDetails">
        <h2 class="titleDetails">{{HeroStruc?.name}} Details</h2>
      </section>
      <section class="Details-id">
        <p class="Details__titleid">id: </p>
        <p class="Details__id">{{HeroStruc?.id}}</p>
      </section>
      <section class="Details-name">
        <p class="Details__titlename">Hero name: </p>
        <p class="Details__name">{{HeroStruc?.name}}</p>
      </section>

      <h2 class="back" (click)="back()" >Back</h2>
    </section>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  HeroStruc: HeroStruc |undefined;
  HeroService = inject(HeroService);

  constructor(private location: Location) {
    const HeroId = parseInt(this.route.snapshot.params['id'], 10);
    this.HeroService.getHeroById(HeroId).then(hero =>{
      this.HeroStruc = hero;
    })
  }
  back(): void {
    this.location.back()
  }
}
