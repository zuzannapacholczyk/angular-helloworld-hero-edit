import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { OverviewComponent } from "./components/overview.component";
import { DetailsComponent } from "./components/details.component";

const routes: Routes = [
  { path: "overview", component: OverviewComponent },
  { path: "details", component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
