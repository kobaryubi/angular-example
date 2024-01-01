import { Component } from "@angular/core";
import { Hero } from "../hero";
import { FormsModule } from "@angular/forms";
import { CommonModule, Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { HeroService } from "../hero.service";

@Component({
  selector: "app-hero-detail",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./hero-detail.component.html",
})
export class HeroDetailComponent {
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.heroService.getHero(id).subscribe((hero) => {
      this.hero = hero;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
