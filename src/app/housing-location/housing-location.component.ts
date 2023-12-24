import { Component, Input } from "@angular/core";
import { HousingLocation } from "../housinglocation";

@Component({
  selector: "app-housing-location",
  standalone: true,
  templateUrl: "./housing-location.component.html",
})
export class HousingLocationComponent {
  @Input()
  housingLocation!: HousingLocation;
}
