import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-reference",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./reference.component.html",
})
export class ReferenceComponent {
  myContext = { $implicit: "World", localSk: "Svet" };
}
