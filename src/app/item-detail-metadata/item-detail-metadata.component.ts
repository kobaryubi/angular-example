import { Component, Input, booleanAttribute } from "@angular/core";

@Component({
  selector: "app-item-detail-metadata",
  standalone: true,
  templateUrl: "./item-detail-metadata.component.html",
})
export class ItemDetailMetadataComponent {
  @Input({ required: true }) item!: string;
  @Input({ transform: booleanAttribute }) itemAvailability!: boolean;
}
