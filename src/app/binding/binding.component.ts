import { Component } from "@angular/core";

@Component({
  selector: "app-binding",
  standalone: true,
  templateUrl: "./binding.component.html",
  styleUrl: "./binding.component.less",
})
export class BindingComponent {
  onSale = true;
  hasClass = true;

  onClickToggle() {
    this.hasClass = !this.hasClass;
  }
}
