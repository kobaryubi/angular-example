import { Component } from "@angular/core";
import { OpenCloseComponent } from "../open-close/open-close.component";

@Component({
  selector: "app-animation",
  standalone: true,
  imports: [OpenCloseComponent],
  templateUrl: "./animation.component.html",
  styleUrl: "./animation.component.less",
})
export class AnimationComponent {}
