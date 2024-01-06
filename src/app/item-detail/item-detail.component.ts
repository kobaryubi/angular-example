import { Component, Input } from "@angular/core";

@Component({
  selector: "app-item-detail",
  standalone: true,
  templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent {
  @Input() item = "";
}
