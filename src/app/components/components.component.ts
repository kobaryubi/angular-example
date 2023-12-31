import { Component } from "@angular/core";
import { ZippyBasicComponent } from "../zippy-basic/zippy-basic.component";
import { ZippyMultislotComponent } from "../zippy-multislot/zippy-multislot.component";

@Component({
  selector: "app-components",
  standalone: true,
  imports: [ZippyBasicComponent, ZippyMultislotComponent],
  templateUrl: "./components.component.html",
})
export class ComponentsComponent {}
