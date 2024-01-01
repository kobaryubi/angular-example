import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { CommonModule } from "@angular/common";
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
import { HeroService } from "../hero.service";
import { MessageService } from "../message.service";

@Component({
  selector: "app-heroes",
  standalone: true,
  imports: [CommonModule, HeroDetailComponent],
  templateUrl: "./heroes.component.html",
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
