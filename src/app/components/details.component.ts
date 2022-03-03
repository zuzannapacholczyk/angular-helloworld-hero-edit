import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Params } from "@angular/router";
import { Hero } from "../hero";
import { HeroesService } from "../services/heroes.service";

@Component({
  selector: "details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  heroForm: FormGroup;
  hero: Hero = { name: "", alterEgo: "", power: "" };

  constructor(
    private heroesService: HeroesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const heroName = params["hero?"];
      console.log(heroName);
      if (heroName) {
        this.hero = this.heroesService.getHeroByName(heroName);
      }
    });

    this.heroForm = new FormGroup({
      name: new FormControl(this.hero.name, [Validators.required]),
      alterEgo: new FormControl(this.hero.alterEgo),
      power: new FormControl(this.hero.power)
    });
  }

  onSubmit() {
    this.heroesService.save(this.heroForm.value);
  }
}
