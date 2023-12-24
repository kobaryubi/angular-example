import { Component } from "@angular/core";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from "../housinglocation";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button type="button">Search</button>
      </form>
    </section>
    <section>
      <app-housing-location
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
})
export class HomeComponent {
  readonly baseUrl = "https://angular.io/assets/images/tutorials/faa";

  housingLocation: HousingLocation = {
    id: 9999,
    name: "Test Home",
    city: "Test city",
    state: "ST",
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
