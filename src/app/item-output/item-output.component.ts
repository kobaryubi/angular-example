import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-item-output",
  standalone: true,
  templateUrl: "./item-output.component.html",
})
export class ItemOutputComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
