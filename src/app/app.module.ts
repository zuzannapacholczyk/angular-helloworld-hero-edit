import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { OverviewComponent } from "./components/overview.component";
import { DetailsComponent } from "./components/details.component";
import { RoutingModule } from "./routing.module";
import { HeroesService } from "./services/heroes.service";

@NgModule({
  declarations: [AppComponent, OverviewComponent, DetailsComponent],
  imports: [BrowserModule, RoutingModule, FormsModule, ReactiveFormsModule],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
