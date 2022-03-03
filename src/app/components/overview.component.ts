import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HeroesService } from "../services/heroes.service";

@Component({
  selector: "overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.css"]
})
export class OverviewComponent implements OnInit {
  title = "Heroes overview";
  heroes$;
  constructor(private heroesService: HeroesService, private router: Router) {}

  ngOnInit() {
    this.heroes$ = this.heroesService.heroesData();
  }

  editHero(heroName: string) {
    this.router.navigate(["details", heroName]);
  }
}
