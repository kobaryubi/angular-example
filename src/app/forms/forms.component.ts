import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
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
    name: new FormControl("", [
      Validators.required,
      Validators.minLength(4),
      this.#forbiddenNameValidator(/bob/i),
    ]),
  });

  #forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control) => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }

  get name() {
    return this.heroForm.get("name")!;
  }
}
