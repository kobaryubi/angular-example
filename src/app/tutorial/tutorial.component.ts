import { Component } from "@angular/core";
import { HeroesComponent } from "../heroes/heroes.component";
import { MessagesComponent } from "../messages/messages.component";

@Component({
  selector: "app-tutorial",
  standalone: true,
  imports: [HeroesComponent, MessagesComponent],
  templateUrl: "./tutorial.component.html",
})
export class TutorialComponent {
  title = "Tour of Heroes";
}
