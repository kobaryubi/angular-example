import { Component, Input } from "@angular/core";
import { HousingLocation } from "../housinglocation";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-housing-location",
  standalone: true,
  imports: [RouterModule],
  template: `
    <section>
      <img
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
      />
      <h2>{{ housingLocation.name }}</h2>
      <p>{{ housingLocation.city }}, {{ housingLocation.state }}</p>
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
