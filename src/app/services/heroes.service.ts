import { Observable, of } from "rxjs";
import { Hero } from "../hero";

export class HeroesService {
  heroes = [
    { name: "Batman", alterEgo: "Cat", power: "darkness" },
    { name: "Superman", alterEgo: undefined, power: "flying" },
    { name: "Spiderman", alterEgo: "Spider", power: "web" }
  ];

  public heroesData(): Observable<Hero[]> {
    return of(this.heroes);
  }

  public save(hero: Hero) {
    this.heroes.push(hero);
  }
}
