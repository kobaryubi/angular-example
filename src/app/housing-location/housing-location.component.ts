import { Component, Input } from "@angular/core";
import { HousingLocation } from "../housinglocation";

@Component({
  selector: "app-housing-location",
  standalone: true,
  template: `
    <section>
      <img
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
      />
      <h2>{{ housingLocation.name }}</h2>
      <p>{{ housingLocation.city }}, {{ housingLocation.state }}</p>
    </section>
  `,
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
