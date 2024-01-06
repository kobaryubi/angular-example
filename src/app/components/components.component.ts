import { Component } from "@angular/core";
import { ZippyBasicComponent } from "../zippy-basic/zippy-basic.component";
import { ZippyMultislotComponent } from "../zippy-multislot/zippy-multislot.component";
import { ItemDetailComponent } from "../item-detail/item-detail.component";
import { ItemOutputComponent } from "../item-output/item-output.component";
import { CommonModule } from "@angular/common";
import { ItemDetailMetadataComponent } from "../item-detail-metadata/item-detail-metadata.component";
import { InputOutputComponent } from "../input-output/input-output.component";

@Component({
  selector: "app-components",
  standalone: true,
  imports: [
    CommonModule,
    ZippyBasicComponent,
    ZippyMultislotComponent,
    ItemDetailComponent,
    ItemOutputComponent,
    ItemDetailMetadataComponent,
    InputOutputComponent,
  ],
  templateUrl: "./components.component.html",
})
export class ComponentsComponent {
  currentItem = "Television";
  items = ["item1", "item2", "item3", "item4"];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  crossOffItem(item: string) {
    console.warn(`Parent says: crossing off ${item}.`);
  }
}
