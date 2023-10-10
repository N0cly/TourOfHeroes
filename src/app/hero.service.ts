import { Injectable } from '@angular/core';
import {HeroStruc} from "./hero-struc";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  url = "http://localhost:3000/heroes";

  async getAllHeroes(): Promise<HeroStruc[]>{
    const data = await fetch(this.url)
    return await data.json() ?? {};
  }

  async getHeroById(id: number): Promise<HeroStruc | undefined> {
    const data= await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  async getHeroSorted(): Promise<HeroStruc[]>{
    const data = await fetch(`${this.url}?_sort=id&_order=asc`);
    return await data.json() ?? {};
  }

  async getHeroSortedByScore(): Promise<HeroStruc[]>{
    const data = await fetch(`${this.url}?_sort=score&_order=desc`);
    return await data.json() ?? {};
  }

  async get4HeroSortedByScore(): Promise<HeroStruc[]>{
    const data = await fetch(`${this.url}?_sort=score&_order=desc&_limit=4`);
    return await data.json() ?? {};
  }

}
