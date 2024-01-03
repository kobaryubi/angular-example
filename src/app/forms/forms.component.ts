import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { UniqueAlterEgoValidator } from "../unique-alter-ego.validator";

@Component({
  selector: "app-forms",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./forms.component.html",
})
export class FormsComponent implements OnInit {
  heroForm!: FormGroup;

  ngOnInit(): void {
    this.heroForm = new FormGroup(
      {
        name: new FormControl("", [
          Validators.required,
          Validators.minLength(4),
          this.#forbiddenNameValidator(/bob/i),
        ]),
        alterEgo: new FormControl("", {
          asyncValidators: [
            this.alterEgoValidator.validate.bind(this.alterEgoValidator),
          ],
          updateOn: "blur",
        }),
      },
      { validators: this.#identityRevealedValidator }
    );
  }

  #forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control) => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }

  #identityRevealedValidator: ValidatorFn = (control) => {
    const name = control.get("name");
    const alterEgo = control.get("alterEgo");

    return name && alterEgo && name.value === alterEgo.value
      ? { identityRevealed: true }
      : null;
  };

  get name() {
    return this.heroForm.get("name")!;
  }

  get alterEgo() {
    return this.heroForm.get("alterEgo")!;
  }

  constructor(private alterEgoValidator: UniqueAlterEgoValidator) {}
}
