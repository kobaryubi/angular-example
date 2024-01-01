import { Component, Input } from "@angular/core";
import { Hero } from "../hero";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-hero-detail",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./hero-detail.component.html",
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
