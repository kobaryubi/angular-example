import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component } from "@angular/core";

@Component({
  selector: "app-open-close",
  standalone: true,
  templateUrl: "./open-close.component.html",
  animations: [
    trigger("openClose", [
      state(
        "open",
        style({
          height: "200px",
          opacity: 1,
          backgroundColor: "yellow",
        })
      ),
      state(
        "closed",
        style({
          height: "100px",
          opacity: 0.8,
          backgroundColor: "blue",
        })
      ),
      transition("open => closed", [animate("1s")]),
      transition("closed => open", [animate("0.5s")]),
    ]),
  ],
})
export class OpenCloseComponent {
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
