import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-forms",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./forms.component.html",
})
export class FormsComponent {
  heroForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(4)]),
  });

  get name() {
    return this.heroForm.get("name")!;
  }
}
