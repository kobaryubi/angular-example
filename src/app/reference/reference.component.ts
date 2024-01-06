import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-reference",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./reference.component.html",
})
export class ReferenceComponent {
  myContext = { $implicit: "World", localSk: "Svet" };
  form = new FormGroup({
    name: new FormControl("", { validators: [Validators.required] }),
  });
  get submitMessage() {
    return this.#submitMessage;
  }
  #submitMessage = "";

  callPhone(value: string) {
    console.warn(`Calling ${value} ...`);
  }

  onSubmit() {
    this.#submitMessage =
      "Submitted. Form value is " + JSON.stringify(this.form.value);
  }
}
