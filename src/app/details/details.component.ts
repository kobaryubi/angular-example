import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HousingService } from "../housing.service";
import { HousingLocation } from "../housinglocation";

@Component({
  selector: "app-details",
  standalone: true,
  template: `
    <article>
      <img [src]="housingLocation?.photo"
        alt="Exterior photo of {{housingLocation?.name}}"/>
      <section>
        <h2>{{housingLocation?.name}}</h2>
        <p>{{housingLocation?.city}}, {{housingLocation?.state}}</p>
      </section>
      <section>
        <h2>About this housing location</h2>
        <ul>
          <li>Units available: {{housingLocation?.availableUnits}}</li>
          <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
          <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
        </ul>
      </section>
    </article>
    `
})
export class DetailsComponent {
  route = inject(ActivatedRoute)
  housingService = inject(HousingService)
  housingLocation: HousingLocation | undefined;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }
}
