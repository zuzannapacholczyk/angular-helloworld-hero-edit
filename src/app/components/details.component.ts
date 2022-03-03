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

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      alterEgo: new FormControl(""),
      power: new FormControl("")
    });
  }

  onSubmit() {
    this.heroesService.save(this.heroForm.value);
  }
}
