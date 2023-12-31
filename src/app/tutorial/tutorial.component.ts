import { Component } from "@angular/core";
import { HeroesComponent } from "../heroes/heroes.component";

@Component({
  selector: "app-tutorial",
  standalone: true,
  imports: [HeroesComponent],
  templateUrl: "./tutorial.component.html",
})
export class TutorialComponent {
  title = "Tour of Heroes";
}
