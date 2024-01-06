import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-input-output",
  standalone: true,
  templateUrl: "./input-output.component.html",
})
export class InputOutputComponent {
  @Input() item = "";
  @Output() deleteRequest = new EventEmitter<string>();

  lineThrough = "";

  delete() {
    console.warn("Child says: emitting item deleteRequest with", this.item);
    this.deleteRequest.emit(this.item);
    this.lineThrough = this.lineThrough ? "" : "line-through";
  }
}
