import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {HeroStruc} from "../hero-struc";

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <a [routerLink]="['/details',HeroStruc.id ]"><section class="listning">
      <section class="id">{{HeroStruc.id}}</section>
      <section class="name">{{HeroStruc.name}}</section>
    </section></a>
  `,
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  @Input() HeroStruc!: HeroStruc;
}
