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
    const editedHero = this.getHeroByName(hero.name);
    if (editedHero) {
      editedHero.alterEgo = hero.alterEgo;
      editedHero.power = hero.power;
    } else {
      this.heroes.push(hero);
    }
  }

  public getHeroByName(name: string): Hero {
    const heroesWithName = this.heroes.filter((hero) => hero.name === name);
    if (heroesWithName.length > 0) return heroesWithName[0];

    return undefined;
  }
}
