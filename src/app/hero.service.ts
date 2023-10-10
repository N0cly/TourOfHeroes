import { Injectable } from '@angular/core';
import {HeroStruc} from "./hero-struc";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  url = "http://localhost:3001/heroes";

  async getAllHeroes(): Promise<HeroStruc[]>{
    const data = await fetch(this.url)
    return await data.json() ?? {};
  }

  async getHeroById(id: number): Promise<HeroStruc | undefined> {
    const data= await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

}
