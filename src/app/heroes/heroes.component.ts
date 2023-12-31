import { Component } from "@angular/core";

@Component({
  selector: "app-heroes",
  standalone: true,
  templateUrl: "./heroes.component.html",
})
export class HeroesComponent {
  hero = "Windstorm";
}
