import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Hero } from "../hero";
import { HeroesService } from "../services/heroes.service";

@Component({
  selector: "details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  heroForm: FormGroup;

  hero: Hero = { name: undefined, alterEgo: undefined, power: undefined };

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl(this.hero.name, [Validators.required]),
      alterEgo: new FormControl(this.hero.alterEgo),
      power: new FormControl(this.hero.power)
    });
  }

  onSubmit() {
    this.heroesService.save(this.hero);
  }
}
